import {useEffect} from 'react';

import {useApi, useStorage} from '.';

function useApiWithStorage(key, apiEndpoint) {
  const [apiData, updateApiData] = useApi(apiEndpoint);
  const [storageData, updateStorageData] = useStorage(key);

  useEffect(() => {
    if (!apiData || apiData.length < 1) {
      updateApiData();
    } else {
      updateStorageData(apiData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiData]);

  return [storageData, updateApiData];
}

export default useApiWithStorage;
