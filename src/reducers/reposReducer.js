import {REPOS_FETCHING} from '../constants/actionTypes'

const initialState = {
  fetching: false,
  error: null,
  data: []
}

export default function repos (state = initialState, action) {
  switch (action.type) {
    case REPOS_FETCHING.START:
      return {...state, error: null, fetching: true}
    case REPOS_FETCHING.SUCCESS:
      return {...state, data: action.payload, fetching: false}
    case REPOS_FETCHING.FAIL:
      return {...state, error: action.payload, fetching: false}
    default:
      return state
  }
}
