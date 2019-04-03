
import { DECK_ADD, DECK_DEL, DECK_LOAD } from '../actions/deck'
import { CARD_ADD, CARD_DEL } from '../actions/card'

export default function deck (state = null, action) {
  switch (action.type) {
    case DECK_LOAD:
      return {
        ...state,
        ...action.decks
      }
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
    case CARD_ADD:
      const {card} = action 
      return {
            ...state,
            [card.deckId]: {
                ...state[card.deckId],
                cards: state[card.deckId].cards.concat(card.id)
            }
      }
    case CARD_DEL:
      const cardId = action.id
      return {
            ...state,
            [card.deckId]: {
                ...state[card.deckId],
                cards: state[card.deckId].cards.filter(p => p !== cardId)
            }
      }
    default :
      return state
  }
}
