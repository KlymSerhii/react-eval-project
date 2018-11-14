// Core
import React, {Component} from 'react'
import Transition from 'react-transition-group/Transition'
import TweenMax from 'gsap/TweenMax'

const animatedComponentFactory = (animationHoc) => (options = { duration: 0.3 }) => (WrappedComponent) => {
  return animationHoc(WrappedComponent, options)
}

const fadeUpHoc = (WrappedComponent, options = { duration: 0.3 }) => {
  return class FadesUp extends Component {

    constructor (props) {
      super(props);

      this.state = {
        mounted: false
      }
    }
    componentDidMount () {
      this.setState({
        mounted: true
      })
    }

    render () {
      const {mounted} = this.state;
      return (
        <Transition
          timeOut={1000}
          in={mounted}
          unmountOnExit
          onEnter={node => TweenMax.set(node, {y: 0, opacity: 0})}
          addEndListener={(node, done) => {
            TweenMax.fromTo(node, options.duration, {
              y: mounted ? 50 : 0, opacity: mounted ? 0 : 1
            }, {
              y: mounted ? 0 : 50, opacity: mounted ? 1 : 0, onComplete: done})
            }
          }
        >
          <WrappedComponent {...this.props} />
        </Transition>
      );
    }
  }
}


const fadeUp = animatedComponentFactory(fadeUpHoc)

export { fadeUp }


