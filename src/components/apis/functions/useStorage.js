/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

import {storeObject, retrieveObject} from '.';

function useStorage(key) {
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);

  const toggleUpdate = () => setUpdate(!update);

  useEffect(() => {
    const refreshStorageData = async () => {
      const stored = await retrieveObject(key);
      setData(stored);
    };
    refreshStorageData();
  }, [update]);

  const updateData = async newData => {
    const store = await storeObject(key, newData);
    if (store) {
      toggleUpdate();
    }
  };

  return [data, updateData];
}

export default useStorage;
