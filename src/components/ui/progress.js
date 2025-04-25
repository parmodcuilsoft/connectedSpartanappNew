import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

// Style
const background = {
  backgroundColor: '#D8D8D8',
  width: '100%',
  height: 50,
  padding: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
};

const textStyle = {
  fontSize: 18,
  fontFamily: 'SourceSansPro-SemiBold',
  marginRight: 5,
  paddingLeft: 5,
};

const bar = {
  backgroundColor: '#E2231A',
  height: '100%',
};

const barBackground = {
  backgroundColor: '#FFF',
  height: 30,
  width: '85%',
  padding: 2,
};

const Progress = ({val, max}) => (
  <View style={background}>
    <View style={barBackground}>
      <View style={{...bar, width: `${(val / max) * 100}%`}} />
    </View>
    <Text style={textStyle}>{`${val} of ${max}`}</Text>
  </View>
);

export default Progress;
