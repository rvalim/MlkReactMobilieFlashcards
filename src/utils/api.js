import * as db from './_DATA'
import { generateUID } from './helper'

export function getInitialData() {
  return Promise.all(
    [getDecks()]
  ).then(
    ([decks]) => {
      return {
        decks,
      }
    }
  )
}

export function saveDeck(key, title) {
  let deck = formatDeck(key, title, 'verify')
  return db.updateEntry(key, deck)
}

export function getDecks() {
  return db.getAll()
}

export function getDeck(key) {
  return db.getItem(key)
}

export function deleteDeck(key) {
  return db.deleteEntry(key)
}

export function addCardToDeck(key, question, answer) {
  const card = formatCard(question, answer, 'verify')
  card.id = generateUID()
  
  return new Promise(
    (resolve, reject) => {
      getDeck(key).then(
        (deck) => {
          deck.questions = deck.questions.concat(card)

          db.updateEntry(deck.id, deck)
            .then(
              resolve(card)
            )
            .catch(e => reject(e))
        }
      )
    }
  )
}

function formatCard(question, answer) {
  return {
    timestamp: Date.now(),
    question,
    answer,
  }
}

function formatDeck(key, title, author) {
  return {
    id: key,
    timestamp: Date.now(),
    author,
    title,
    questions: []
  }
}