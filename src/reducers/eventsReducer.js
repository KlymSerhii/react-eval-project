import {EVENTS_FETCHING} from '../constants/actionTypes'

const initialState = {
  fetching: false,
  error: null,
  data: []
}

export default function events (state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHING.START:
      return {...state, error: null, fetching: true}
    case EVENTS_FETCHING.SUCCESS:
      return {...state, data: action.payload, fetching: false}
    case EVENTS_FETCHING.FAIL:
      return {...state, error: action.payload, fetching: false}
    default:
      return state
  }
}
