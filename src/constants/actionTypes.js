const asyncActionType = (type) => ({
  START: `${type}_START`,
  SUCCESS: `${type}_SUCCESS`,
  FAIL: `${type}_FAIL`
})

export const REPOS_FETCHING = asyncActionType('REPOS_FETCHING')
export const USER_FETCHING = asyncActionType('USER_FETCHING')
export const EVENTS_FETCHING = asyncActionType('EVENTS_FETCHING')
export const LOADING = asyncActionType('LOADING')
