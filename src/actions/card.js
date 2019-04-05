import { saveCard } from '../utils/api'

export const CARD_ADD = 'CARD_ADD'
export const CARD_DEL = 'CARD_DEL'
export const CARD_LOAD = 'CARD_LOAD'

export function _addCard(card){
    return {
        type: CARD_ADD, 
        card
    }
}

export function addCard(deckId, question, answer){
    return (dispatch, getState) =>{
        return saveCard(deckId, question, answer)
            .then(res => {
                dispatch(_addCard(res))
            })
    } 
}

export function loadCards(cards){
    return {
        type: CARD_LOAD, 
        cards
    }
}

export function delCard(id){
    return {
        type: CARD_DEL, 
        id
    }
}