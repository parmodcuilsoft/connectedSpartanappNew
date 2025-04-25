import {useState, useEffect} from 'react';
import {Platform} from 'react-native';

import {requestExternalWritePermission} from '.';

function usePermissions() {
  const [permission, setPermission] = useState(false);
  const [prompted, setPrompted] = useState(false);

  useEffect(() => {
    const prompt = async () => {
      setPermission(await requestExternalWritePermission());
    };
    if (!prompted && Platform.OS === 'android') {
      setPrompted(true);
      prompt();
    }
  }, [prompted]);

  return permission;
}

export default usePermissions;
