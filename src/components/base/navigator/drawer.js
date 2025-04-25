import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
// import {DrawerItemList} from '@react-navigation/drawer';

import {DrawerHeader} from '../../ui';

const sideStyle = {flex: 1, backgroundColor: '#484849', width: '100%'};
const interfaceStyle = {
  backgroundColor: 'white',
  width: '100%',
  marginBottom: -10,
};

const DrawerContent = props => (
  <SafeAreaView style={sideStyle}>
    <DrawerHeader />
    <ScrollView style={interfaceStyle}>
      {/* <DrawerItemList {...props} /> */}
    </ScrollView>
  </SafeAreaView>
);

export default DrawerContent;
