/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {Text} from 'react-native-elements';

import {logClick} from '../../../apis';

const BottomBarStyle = {
  backgroundColor: '#28282A',
  width: '100%',
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const backStyle = {
  fontSize: 18,
  color: '#FFF',
  fontWeight: 'bold',
};

const textStyle = {
  fontSize: 20,
  color: '#FFF',
  fontWeight: 'bold',
  marginLeft: '2.5%',
  fontFamily: 'SourceSansPro-Semibold',
};

const BackWrapStyle = {
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
};

const BottomBar = ({title, navigation}) => (
  <View style={BottomBarStyle}>
    {title !== 'Home' ? (
      <TouchableHighlight
        style={BackWrapStyle}
        onPress={() => {
          logClick('backScreen');
          navigation.goBack();
        }}>
        <Text style={backStyle}>&lt;</Text>
      </TouchableHighlight>
    ) : (
      <View style={{width: '12%'}} />
    )}
    <Text style={textStyle}>{title || null}</Text>
    <View style={{width: '15%'}} />
  </View>
);

export default BottomBar;
