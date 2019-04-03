let cards = {
  "loxhs1bqm25b708cmbf3g": {
    id: "loxhs1bqm25b708cmbf3g",
    question: "Pizza ou esfirra",
    answer: "pizza"
  },
  "vthrdm985a262al8qx3do": {
    id: "vthrdm985a262al8qx3do",
    question: "dog ou gato",
    answer: "dog"},
  "xj352vofupe1dqz9emx13r": {
    id: "xj352vofupe1dqz9emx13r",
    question: "bla bla",
    answer: "bla"},
}

let decks = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    cards: ["loxhs1bqm25b708cmbf3g"]
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'sarahedo',
    timestamp: 1467166872634,
    cards: ["vthrdm985a262al8qx3do"]
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1467166872634,
    cards: ["xj352vofupe1dqz9emx13r"]
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getDecks () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    cards:[]
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      // users = {
      //   ...users,
      //   [authedUser]: {
      //     ...users[authedUser],
      //     questions: users[authedUser].questions.concat([formattedQuestion.id])
      //   }
      // }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
