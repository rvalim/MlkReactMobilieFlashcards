import { getInitialData } from '../utils/api'
import { loadDecks } from './deck'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ decks }) => {//, questions }) => {
        dispatch(loadDecks(decks))
      })
  }
}
