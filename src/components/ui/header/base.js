import React from 'react';
import {View} from 'react-native';

import {TopBar, BottomBar} from './bars';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = ({title}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TopBar navigation={navigation} />
      <BottomBar navigation={navigation} title={title} />
    </View>
  )
};

export default HeaderBar;
