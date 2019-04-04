import * as db from './_data'

export const CARD_TYPE = 'CARD'
export const DECK_TYPE = 'DECK'

export function saveDeck(title) {
    let deck = formatDeck(title, 'verify')
    return db.submitEntry(DECK_TYPE, deck)
}
export function deleteEntry(key) {
    return db.removeEntry(key)
}
export function saveCard(deckId, question, answer) {
    let card = formatCard(deckId, question, answer, 'verify')
    return db.submitEntry(CARD_TYPE, card)
}

function formatCard (deckId, question, answer, author) {
  return {
    deckId,
    timestamp: Date.now(),
    author,
    question,
    answer,
  }
}

function formatDeck (title, author) {
  return {
    timestamp: Date.now(),
    author,
    title,
    cards:[]
  }
}