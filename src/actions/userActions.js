import {USER_FETCHING} from '../constants/actionTypes'

export function getUser () {
  return (dispatch) => {
    dispatch({
      type: USER_FETCHING.START
    })
    try {
      setTimeout(() => {
        dispatch({
          type: USER_FETCHING.SUCCESS,
          payload: require('./user.json')
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: USER_FETCHING.FAIL,
        payload: e
      })
    }
  }
}
