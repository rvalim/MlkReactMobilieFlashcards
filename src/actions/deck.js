import { saveDeck } from '../utils/api'

export const DECK_ADD = 'DECK_ADD'
export const DECK_DEL = 'DECK_DEL'
export const DECK_LOAD = 'DECK_DEL'

function _addDeck(deck) {
    return {
        type: DECK_ADD,
        deck
    }
}

export function addDeck(deck){
    return (dispatch, getState) =>{
        return saveDeck(deck)
            .then(res => {
                dispatch(_addDeck(res))
            })
    } 
}

export function delDeck(id){
    return {
        type: DECK_DEL,
        id
    }
}

export function loadDecks(decks){
    return {
        type: DECK_LOAD,
        decks
    }
}