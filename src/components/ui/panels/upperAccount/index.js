/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Platform} from 'react-native';

import {MapBack, Registration} from '../..';
import Form from './form';
import Display from './display';
import {useStorage} from '../../../apis';
import { useNavigation } from '@react-navigation/native';

const upperPanel = {height: 490};

const ACCOUNT_KEY = 'ACCOUNT_V1';
const emptyUser = {
  fName: '',
  lName: '',
  vin: '',
  email: '',
  phone: '',
  purchaseDate: '',
  make: '',
  model: '',
};

const UpperPanel = () => {
  const navigation = useNavigation();
  const [edit, setEdit] = useState(true);
  const [countDown, setCountDown] = useState(false);
  const [storageData, updateStorageData] = useStorage(ACCOUNT_KEY);
  const height = Platform.OS === 'android' ? 640 : 590;
  const viewStyle = {
    backgroundColor: '#3d3d3d',
    height: edit ? height : '100%',
  };
  const updateUser = user => {
    updateStorageData(user);
    setEdit(false);
  };
  const editingTime = () => {
    setEdit(true);
  };
  const cancelEdit = () => {
    if (
      !storageData ||
      Object.values(storageData).filter(v => v === '').length ===
        storageData.length
    ) {
      navigation.navigate('Home');
    } else {
      setEdit(false);
    }
  };
  const logOut = () => {
    updateStorageData(emptyUser);
    setEdit(true);
  };
  useEffect(() => {
    if (
      countDown &&
      (!storageData ||
        Object.values(storageData).filter(v => v === '').length > 0)
    ) {
      editingTime();
    }
    setTimeout(() => setCountDown(true), 1000);
  }, [countDown]);
  return (
    <View>
      <View style={upperPanel}>
        <MapBack>
          <Display
            user={storageData || emptyUser}
            signOut={logOut}
            edit={editingTime}
          />
        </MapBack>
      </View>
      <View style={viewStyle}>
        <Registration />
      </View>
      {edit && (
        <Form
          user={storageData || emptyUser}
          submitForm={updateUser}
          cancelEdit={cancelEdit}
        />
      )}
    </View>
  );
};

export default UpperPanel;
