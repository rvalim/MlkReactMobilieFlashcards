
import { CARD_ADD, CARD_DEL } from '../actions/card'

export default function card(state = {}, action) {
  switch (action.type) {
    case CARD_ADD:
      return {
        ...state,
        [action.card.id]: {
          ...action.card
        }
      }
    case CARD_DEL:
      const res = state
      delete res[action.id]
      return {
        ...res
      }
    default:
      return state
  }
}
