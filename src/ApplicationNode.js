import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from 'services/history'
import Routes from './containers/Routes'

export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {}

  render () {
    const {store} = this.props

    return (
        <Provider store={store}>
          <Router history={history}>
            <Routes />
          </Router>
        </Provider>
    )
  }
}
