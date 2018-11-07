// Core
import React, {Component} from 'react';

import Transition from 'react-transition-group/Transition';

import TweenMax from 'gsap/TweenMax';

function makeFadeUp(Component, options = { duration: 0.3 }) {
  return class FadesUp extends React.Component {

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
          onEnter={node => TweenMax.fromTo(node, options.duration, {y: 50, opacity: 0}, {y: 0, opacity: 1})}
          addEndListener={(node, done) => {TweenMax.fromTo(node, options.duration, {y: mounted ? 50 : 0, opacity: mounted ? 0 : 1}, {y: mounted ? 0 : 50, opacity: mounted ? 1 : 0, onComplete: done})}
        }
        >
          <Component {...this.props} />
        </Transition>
      );
    }
  }
}

function fadeUp (Component) {
  return typeof arguments[0] === 'function'
    ? makeFadeUp(arguments[0])
    : Component => makeFadeUp(Component, arguments[0]);
}


const animations = {
  fadeUp
};

export default animations;


