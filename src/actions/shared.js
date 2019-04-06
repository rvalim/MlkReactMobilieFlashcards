import { getInitialData } from '../utils/api'
import { loadDecks } from './deck'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ decks }) => {
        dispatch(loadDecks(decks))
      })
  }
}
