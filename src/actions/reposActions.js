import {REPOS_FETCHING} from '../constants/actionTypes'

export function getRepos () {
  return (dispatch) => {
    dispatch({
      type: REPOS_FETCHING.START
    })
    try {
      setTimeout(() => {
        dispatch({
          type: REPOS_FETCHING.SUCCESS,
          payload: require('./repos.json')
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: REPOS_FETCHING.FAIL,
        payload: e
      })
    }
  }
}
