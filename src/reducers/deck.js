
import { DECK_ADD, DECK_DEL, DECK_LOAD } from '../actions/deck'
import { CARD_ADD, CARD_DEL } from '../actions/card'

export default function deck (state = {}, action) {
  switch (action.type) {
    case DECK_LOAD:
      return {
        ...state,
        ...action.decks
      }
    case DECK_ADD :
      const {deck} = action
      const key = Object.keys(deck)[0]

      return {
          ...state,
          [key]: {
              ...deck[key]
          }
      }
    case DECK_DEL :
        const res = state
        delete res[action.id]
      return {
            ...res
      }
    case CARD_ADD:
      const cardKey = Object.keys(action.card)[0]
      const card = action.card[cardKey] 
      
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
