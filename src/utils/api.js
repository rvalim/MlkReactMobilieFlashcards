import * as db from './_data'

export const CARD_TYPE = 'CARD'
export const DECK_TYPE = 'DECK'

export function saveDeck(title) {
    let deck = formatDeck(title, 'verify')
    return db.submitEntry(DECK_TYPE, deck)
}
export function deleteDeck(key) {
    return db.removeEntry(key)
}
export function saveCard(card) {
    return db.submitEntry(CARD_TYPE, card)
}

function formatDeck (title, author) {
  return {
    timestamp: Date.now(),
    author,
    title,
    cards:[]
  }
}