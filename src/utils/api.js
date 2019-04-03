import {
    _getDecks,
    //_getQuestions,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getDecks(),
      //_getQuestions(),
    ]).then(([decks]) => ({//, questions]) => ({
      users,
      //questions,
    }))
  }
  