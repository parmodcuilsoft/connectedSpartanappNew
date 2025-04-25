/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableHighlight, Image} from 'react-native';

import {logClick} from '../../../apis';
import CustomIcon from '../../customIcon';

const TopBarStyle = {
  backgroundColor: '#484849',
  width: '100%',
  height: 42,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const HamburgerWrapStyle = {
  padding: 10,
};

const width = {
  width: 50,
};

const TopBar = ({navigation}) => (
  <View style={TopBarStyle}>
    <TouchableHighlight
      style={HamburgerWrapStyle}
      onPress={() => {
        logClick('open_drawer'); // Change log event name for clarity
        navigation.openDrawer(); // Opens the drawer
      }}>
      <CustomIcon name="menu-outline" size={25} color='#FFF' />
    </TouchableHighlight>
    <Image
      style={{width: 48, height: 28, marginTop: 8}}
      source={require('../../../../assets/spartan_logo.png')}
    />
    <View style={width} />
  </View>
);

export default TopBar;
