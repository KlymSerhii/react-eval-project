import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

export default class Graphic extends React.Component {
  static defaultProps = {
    legend: []
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    legend: PropTypes.arrayOf(PropTypes.shape({key: PropTypes.string, color: PropTypes.string})).isRequired
  }

  constructor (props) {
    super(props)

    this.chart = React.createRef()
    this.container = React.createRef()
  }

  componentDidMount () {
    this.renderChart()
  }

  createChartRef = el => {
    this.chart = el
  }

  getData () {
    return this.parseData(this.props.data)
  }

  parseData (data) {
    const keys = this.props.legend.map(item => item.key.split(' ').join(''))

    const lines = []
    for (const key of keys) {
      lines.push(data.map(dateObj => ({
        date: new Date(dateObj.date),
        key: key.split(/(?=[A-Z])/).join(' '),
        value: dateObj.data[key]
      })))
    }

    return lines
  }

  createContainerRef = el => {
    this.container = el
  }

  renderChart = () => {
    const data = this.getData()

    const margin = {
      top: 40,
      right: 32,
      bottom: 40,
      left: 26
    }
    const svgWidth = this.container.clientWidth
    const svgHeight = 475
    const width = svgWidth - margin.left - margin.right
    const height = svgHeight - margin.top - margin.bottom

    d3.selectAll('#chart svg > *').remove()

    const svg = d3.select(this.chart)
      .attr('id', '#chart')
      .attr('width', svgWidth)
      .attr('height', svgHeight)

    // Append the graph
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const toolTip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0.7)
      .style('border', '1px solid black')

    const x = d3.scaleTime().rangeRound([0, width])
    const y = d3.scaleLinear().rangeRound([height, 0])

    const xAxis = d3
      .axisBottom()
      .scale(x)
      .ticks(4)
      .tickFormat(d3.timeFormat('%b/%d/%Y'))
    const yAxis = d3
      .axisLeft()
      .scale(y)

    const findBounds = (bound, key) => d3[bound](data.map(array => d3[bound](d3.extent(array, d => d[key]))))

    const xMax = findBounds('max', 'date')
    const xMin = findBounds('min', 'date')
    const yMax = findBounds('max', 'value')
    const yMin = findBounds('min', 'value')

    x.domain([xMin, xMax])
    y.domain([yMin, yMax])

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(+d.value))

    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)

    g.append('g')
      .call(yAxis)
      .append('text')
      .attr('fill', '#000')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('# of events')

    for (const index in data) {
      const dot = g.selectAll('.dot')
        .data(data[index])
        .enter()
        .append('circle')
        .attr('fill', this.props.colors[index])
        .attr('stroke', this.props.colors[index])
        .attr('cx', (d, i) => x(d.date))
        .attr('cy', d => y(d.value))
        .attr('r', 5)
        .on('mouseover', d => {
          toolTip
            .transition()
            .style('opacity', 0.9)
          toolTip
            .html(`
              <div>${d.key}</div>
              <span>${d3.timeFormat('%B %d, %Y')(d.date)}</span> - <span>Events: ${d.value}</span>
            `)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY - 28) + 'px')
        })
        .on('mouseout', d => {
          toolTip
            .style('opacity', 0)
        })

      const path = g.append('path')
        .datum(data[index])
        .attr('fill', 'none')
        .attr('stroke', this.props.colors[index])
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 2.5)
        .attr('d', line)
        .on('mouseover', d => {
          path
            .transition()
            .duration(200)
            .attr('stroke-width', 5)

          dot
            .transition()
            .duration(200)
            .attr('r', 6)
        })
        .on('mouseout', d => {
          path
            .transition()
            .duration(200)
            .attr('stroke-width', 2.5)

          dot
            .transition()
            .duration(200)
            .attr('r', 3)
        })

      const totalLength = path.node().getTotalLength()

      path
        .attr('stroke-dasharray', `${totalLength}  ${totalLength}`)
        .attr('stroke-dashoffset', -totalLength * ((index % 2 === 0) ? 1 : -1))
        .transition()
        .delay(index * (Math.floor(Math.random() * Math.floor(100))))
        .duration(1200)
        .attr('stroke-dashoffset', 0)

      dot
        .attr('r', 0)
        .transition()
        .duration(500)
        .delay(250)
        .attr('r', 3)
    }
  }

  render () {
    return (
      <div ref={this.createContainerRef}>
        {this.props.title && <h2>{this.props.title}</h2>}
        <svg ref={this.createChartRef} />
      </div>
    )
  }
}
