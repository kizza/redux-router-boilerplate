import { SHOW_MESSAGE } from '../actions/app'

const initialState = 'Default first'

export default function appTitle(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return 'New title now2e4'
    default:
      return state
  }
}