import { AsyncStorage } from 'react-native'
import {generateUID}from './helper'

const FLASH_CARDS_STORAGE = 'MlkUdaci:FlashCards'

export async function submitEntry(type, entry) {
  let key = generateUID()
  let obj = {
    [key]: {
      id: key,
      type,
      ...entry
    }
  }
  
  //return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
  return new Promise(
    async function(resolve, reject){
      try {
        await AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
        resolve(obj)
      } catch (error) {
        reject(error)
      }
    })  
}

export function removeEntry(key) {
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(FLASH_CARDS_STORAGE, JSON.stringify(data))
    })
}