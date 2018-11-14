import './eventsScreen.scss'

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import Graphic from '../../components/Graphic'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import {fadeUp} from '../../hocs/animationsHoc'

@fadeUp()
export default class EventsScreen extends PureComponent {
  static defaultProps = {
    events: [],
    colorsArr: [
      'steelblue',
      'green',
      'red',
      'purple',
      'rebeccapurple',
      'orange',
      'yellow',
      'salmon',
      'chartreuse',
      'cyan',
      'gold'
    ]
  }

  static propTypes = {
    events: PropTypes.array.isRequired,
    colorsArr: PropTypes.arrayOf(PropTypes.string)
  }

  getLegendData = () => {
    const {colorsArr} = this.props;
    const keys = this.getUniqueEventTypes()

    return keys.map((key, i) => ({key: key.split(/(?=[A-Z])/).join(' '), color: colorsArr[i]}))
  }

  getUniqueEventTypes () {
    const {events} = this.props
    const uniqueKeys = new Set()

    for (const event of events) {
      if (!uniqueKeys.has(event.type)) {
        uniqueKeys.add(event.type)
      }
    }

    return [...uniqueKeys.values()]
  }


  getUniqueDates () {
    const {events} = this.props
    const dateMap = new Set()

    for (const event of events) {
      const date = new Date(event.created_at)
      const keyDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` // Y M D

      dateMap.add(keyDate)
    }

    return [...dateMap]
  }


  getEventsByDate () {
    const {events} = this.props;
    const uniqueKeys = this.getUniqueEventTypes()
    const uniqueDates = this.getUniqueDates()
    const outData = []

    for (const date of uniqueDates) {
      let dateData = {
        date,
        data: {}
      }

      for (const key of uniqueKeys) {
        dateData.data[key] = 0
      }

      const associatedEvents = events.filter(event => {
        const createdDate = new Date(event.created_at)
        const keyDate = `${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDay()}` // Y M D

        return keyDate === date
      })

      for (const aEvent of associatedEvents) {
        const type = aEvent.type

        const count = dateData.data[type]

        dateData.data[type] = count + 1
      }

      outData.push(dateData)
    }

    return outData
  }

  render () {
    const {events, colorsArr} = this.props
    const eventsByDate = this.getEventsByDate()
    const legendData = this.getLegendData()
    if (events.length < 1) return (<div>No events provided.</div>)
    return (
      <div styleName='eventsScreenContainer'>
        <Graphic data={eventsByDate} colors={colorsArr} legend={legendData}/>
      </div>
    )
  }
}
