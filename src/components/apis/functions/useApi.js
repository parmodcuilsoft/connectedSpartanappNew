/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

import {getFromApi} from '.';
import useRetry from './useRetry';

function useApi(apiEndpoint) {
  const [data, setData] = useState(null);
  const [connected, setConnected] = useState(false);

  const updateApi = async () => {
    const incoming = await getFromApi(apiEndpoint);
    if (incoming) {
      setData(incoming);
      return true;
    }
    return false;
  };

  const [_, startCall] = useRetry(updateApi);

  useEffect(() => {
    const isConnected = async () => {
      const connect = await NetInfo.fetch();
      setConnected(connect.isInternetReachable);
    };
    isConnected();
  }, []);

  useEffect(() => {
    if (connected) {
      startCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  return [data, startCall];
}

export default useApi;
