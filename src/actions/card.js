export const CARD_ADD = 'CARD_ADD'
export const CARD_DEL = 'CARD_DEL'

export function addCard(card){
    return {
        type: CARD_ADD, 
        card
    }
}

export function delCard(id){
    return {
        type: CARD_DEL, 
        id
    }
}