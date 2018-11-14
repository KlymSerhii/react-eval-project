import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from 'services/history'
import Home from './containers/Home'

export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount () {
    if (history.location.pathname === '/') {
      history.push('/repositories')
    }
  }

  render () {
    const {store} = this.props

    return (
        <Provider store={store}>
          <Router history={history}>
            <Home />
          </Router>
        </Provider>
    )
  }
}
