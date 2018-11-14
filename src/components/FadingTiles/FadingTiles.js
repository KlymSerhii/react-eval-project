import './fadingTilles.scss'

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import TimelineLite from 'gsap/TimelineLite';

export default class FadingTiles extends PureComponent{

  static propTypes = {
    tileComponent: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  }

  static defaultProps = {
    items: []
  }

  constructor(props){
    super(props)
    this.el = {}
    this.tl = new TimelineLite()
  }

  componentDidMount(){
    for(let i=0; i < Object.keys(this.el).length; i++){
      this.tl.to(this.el[i], .5, {
        x: -10,
        opacity: 1
      }, 0.06 * i)
    }
  }

  renderTileItems () {
    const {items, tileComponent} = this.props
    const TileComponent = tileComponent
    return items.map((item, i) => (
        <div styleName='tileItemContainer' ref={r => this.el[i] = r} key={i}>
          <div styleName='tileItem'><TileComponent {...item} />
          </div>
        </div>
      )
    )
  }

  render(){
    return(
      <div styleName='tileItemsContainer'>
        {this.renderTileItems()}
      </div>
    )
  }
}
