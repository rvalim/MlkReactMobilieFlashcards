
import { CARD_ADD, CARD_DEL, CARD_LOAD } from '../actions/card'

export default function card(state = {}, action) {
  switch (action.type) {
    case CARD_LOAD:
    return {
      ...state,
      ...action.cards
    }
    case CARD_ADD:
      const cardKey = Object.keys(action.card)[0]
      const card = action.card[cardKey]

      return {
        ...state,
        [cardKey]: {
          ...card
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
