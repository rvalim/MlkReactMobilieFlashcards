
import { DECK_ADD, DECK_DEL, DECK_LOAD, CARD_ADD } from '../actions/deck'

export default function deck(state = {}, action) {
  switch (action.type) {
    case DECK_LOAD:
      return {
        ...state,
        ...action.decks
      }
    case DECK_ADD:
      const { deck } = action

      return {
        ...state,
        [deck.id]: {
          ...deck
        }
      }
    case DECK_DEL:
      const res = state
      delete res[action.id]
      return {
        ...res
      }
    case CARD_ADD:
      const {card} = action
      const {deckId} = card

      delete card['deckId']

      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat(card)
        }
      }
    default:
      return state
  }
}
