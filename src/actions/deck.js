export const DECK_ADD = 'DECK_ADD'
export const DECK_DEL = 'DECK_DEL'

export function addDeck(deck){
    return {
        type: DECK_ADD,
        deck
    }
}

export function delDeck(id){
    return {
        type: DECK_DEL,
        id
    }
}