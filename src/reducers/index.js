import { combineReducers } from 'redux'
import deck from '../reducers/deck'
import card from '../reducers/card'

export default combineReducers({
    decks: deck,
    cards: card
})