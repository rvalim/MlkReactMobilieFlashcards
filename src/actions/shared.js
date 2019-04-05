import { getInitialData } from '../utils/api'
import { loadDecks } from './deck'
import { loadCards } from './card'

export function handleInitialData () {
  return (dispatch) => {
    console.log('entrouuuuuuuuuuuuuuu')
    return getInitialData()
      .then(({ decks, cards }) => {//, questions }) => {
        dispatch(loadDecks(decks))
        dispatch(loadCards(cards))
      })
  }
}
