import { AsyncStorage } from 'react-native'
import { generateUID } from './helper'

//save entry
export async function submitEntry(entry) {
  let key = generateUID()
  return updateEntry(key, entry)
}

export async function updateEntry(key, entry) {
  let obj = {
    id: key,
    ...entry
  }

  return new Promise(
    function (resolve, reject) {
      try {
        AsyncStorage.setItem(key, JSON.stringify(obj))
        resolve(obj) 
      } catch (error) {
        reject(error)
      }
    }
  )
}

export async function getAll() {
  //return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
  return new Promise(
    async function (resolve, reject) {
      try {
        let decks = {}

        await AsyncStorage.getAllKeys(async (err, keys) => {
          await AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map(([key, value]) => {
              if (key.substr(0, 5) === 'Udct:') return
              decks = {
                ...decks,
                [key]: JSON.parse(value)
              }
            })
            resolve(decks)
          })
        })

      } catch (error) {
        reject(error)
      }
    })
}

export async function getItem(key) {
  return AsyncStorage.getItem(key).then((res) => JSON.parse(res))
}

export async function deleteEntry(key) {
  return AsyncStorage.removeItem(key).then(() => true)
}

export async function clearAll() {
  return AsyncStorage.clear()
}