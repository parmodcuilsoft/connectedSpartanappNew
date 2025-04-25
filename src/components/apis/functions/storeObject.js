import {storeData, retrieveData} from '.';

export const storeObject = async (key, obj) => {
  const strObject = JSON.stringify(obj);
  return await storeData(key, strObject);
};

export const retrieveObject = async key => {
  const strObject = await retrieveData(key);
  return JSON.parse(strObject);
};
