import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_COUNTER } from '../actions/counter'

const initialCounters = [
  { id: 1, label: 'First one' },
  { id: 2, label: 'Second one' }
]

export function counters(state=initialCounters, action) {
  switch (action.type) {
    case ADD_COUNTER:
      const newId = state.length + 1;
      return state.concat({
          id: newId,
          label: action.label
        })
      /*return {
        ...state,
        [newId]: {
          id: newId,
          name: action.label
        }
      }*/
      
    default:
      return state
  }
}

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}

// import { combineReducers } from 'redux'
// const counterBits = combineReducers({
//   counters,
//   counter
// })

