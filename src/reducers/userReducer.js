import {USER_FETCHING} from '../constants/actionTypes'

const initialState = {
  fetching: false,
  error: null,
  data: {}
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case USER_FETCHING.START:
      return {...state, error: null, fetching: true}
    case USER_FETCHING.SUCCESS:
      return {...state, data: action.payload, fetching: false}
    case USER_FETCHING.FAIL:
      return {...state, error: action.payload, fetching: false}
    default:
      return state
  }
}
