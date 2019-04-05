import { AsyncStorage } from 'react-native'
import {generateUID}from './helper'

const FLASH_CARDS_STORAGE = 'MlkUdaci:FlashCards'

export async function submitEntry(type, entry) {
  let key = generateUID()
  let obj = {
    [key]: {
      id: key,
      ...entry
    }
  }
  
  //return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
  return new Promise(
    async function(resolve, reject){
      try {
        //await AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
        await AsyncStorage.getItem(FLASH_CARDS_STORAGE)
        .then(
          (res) => {
            const resJson = JSON.parse(res) || {}
            const newValue = {
              ...resJson,
              [type]: {
                ...resJson[type],
                ...obj
              }
            }
            AsyncStorage.setItem(FLASH_CARDS_STORAGE, JSON.stringify(newValue))
          }
        )
        resolve(obj)
      } catch (error) {
        reject(error)
      }
    })  
}

export async function getAll(type) {
  //return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
  return new Promise(
    async function(resolve, reject){
      try {
        //await AsyncStorage.mergeItem(FLASH_CARDS_STORAGE, JSON.stringify(obj))
        await AsyncStorage.getItem(FLASH_CARDS_STORAGE)
        .then(res => resolve(JSON.parse(res)[type]))
        
      } catch (error) {
        reject(error)
      }
    })  
}

export async function removeEntry(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch(e) {
    return false;
  }
}