import { useEffect } from 'react';

import useApi from './useApi';
import useStorage from './useStorage';
import { deleteImage, storeImage, imageExists } from './storeImage';

function useApiWithImageStorage(key, apiEndpoint) {
  const [apiData, updateApiData] = useApi(apiEndpoint);
  const [storageData, updateStorageData] = useStorage(key);

  useEffect(() => {
    const store = async () => {
      // If there isn't a saved marketing image, or there's a new marketing image
      if (!storageData || storageData.Image !== apiData[0].Image) {
        const imagePath = await storeImage(apiData[0].Image);
        const oldImage = storageData && storageData.imagePath;
        await updateStorageData({ ...apiData[0], imagePath });
        // Delete old image manually
        oldImage && deleteImage(oldImage);
      } else {
        // If the cache has been cleaned and the current marketing image has been deleted
        if (storageData && storageData.Image === apiData[0].Image) {
          const exists = await imageExists(storageData.imagePath);
          if (!exists) {
            const imagePath = await storeImage(apiData[0].Image);
            updateStorageData({ ...apiData[0], imagePath });
          }
        }
      }
    };
    if (!apiData || apiData.length < 1) {
      updateApiData();
    } else {
      store();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiData]);

  return [storageData, updateApiData];
}

export default useApiWithImageStorage;
