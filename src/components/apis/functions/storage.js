import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, item);
    return true;
  } catch (error) {
    console.error('Error storing data ', error);
    return false;
  }
};

export const retrieveData = async key => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item;
  } catch (error) {
    console.error('Error retrieving data ', error);
    return null;
  }
};
