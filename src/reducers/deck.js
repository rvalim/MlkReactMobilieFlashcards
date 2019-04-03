
import { DECK_ADD, DECK_DEL } from '../actions/deck'

export default function deck (state = null, action) {
  switch (action.type) {
    case DECK_ADD :
      return {
          ...state,
          [action.deck.id]: {
              ...action.deck.action
          }
      }
    case DECK_DEL :
        const res = state
        delete res[action.id]
      return {
          ...res
      }
    default :
      return state
  }
}
