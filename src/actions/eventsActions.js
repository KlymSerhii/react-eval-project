import {EVENTS_FETCHING} from '../constants/actionTypes'

export function getEvents () {
  return (dispatch) => {
    dispatch({
      type: EVENTS_FETCHING.START
    })
    try {
      setTimeout(() => {
        dispatch({
          type: EVENTS_FETCHING.SUCCESS,
          payload: require('./events.json')
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: EVENTS_FETCHING.FAIL,
        payload: e
      })
    }
  }
}
