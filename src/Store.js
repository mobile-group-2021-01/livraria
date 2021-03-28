import AsyncStorage from '@react-native-async-storage/async-storage'
import {Alert} from 'react-native'

async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value)

  } catch(e) {
    Alert.alert(e)
  }
}

async function getData(key) {
  try {
    const value = await AsyncStorage.getItem(key)
    return value

  } catch(e) {
    Alert.alert(e)
  }

}

export {storeData, getData}
