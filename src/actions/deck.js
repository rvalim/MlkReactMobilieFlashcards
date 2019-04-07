import { 
saveDeck,
addCardToDeck,
deleteDeck
} from '../utils/api'

export const DECK_ADD = 'DECK_ADD'
export const DECK_DEL = 'DECK_DEL'
export const DECK_LOAD = 'DECK_LOAD'
export const CARD_ADD = 'CARD_ADD'

function _addDeck(deck) {
    return {
        type: DECK_ADD,
        deck
    }
}

function _delDeck(id) {
    return {
        type: DECK_DEL,
        id
    }
}

function _addCard(card) {
    return {
        type: CARD_ADD,
        card
    }
}



export function loadDecks(decks) {
    return {
        type: DECK_LOAD,
        decks
    }
}

export function addDeck(key, deck) {
    return (dispatch) => {
        return saveDeck(key, deck)
            .then(res => {
                dispatch(_addDeck(res))
            })
    }
}

export function delDeck(id) {
    return (dispatch) => {
        return deleteDeck(id)
            .then(res => {
                if (res) dispatch(_delDeck(id))
            })
    }
}

export function addCard(deckId, question, answer) {
    return (dispatch) => {
        return addCardToDeck(deckId, question, answer)
            .then(res => {
                dispatch(_addCard({deckId, ...res}))
            })
    }
}