import React from 'react';
import {Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import CustomIcon from '../../ui/customIcon';
import Icon from 'react-native-vector-icons/AntDesign';

const inLine = {
  flexDirection: 'row',
    borderBottomColor: '#000',
    paddingVertical: 5,
    padding: 10,
};

const labelWrapper = {
  flex: 3,
};

const labelStyle = {
  fontFamily: 'SourceSansPro-Semibold',
  fontSize: RFPercentage('2.5'),
  color: '#000000',
  fontWeight:"700"
};

const iconWrapper = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  marginRight: 20,
};

const DrawerItem = ({label, source, iconSize}) => (
  <View style={inLine}>
    <View style={iconWrapper}>
      <CustomIcon size={iconSize} name={source} />
    </View>
    <View style={labelWrapper}>
      <Text style={labelStyle}>{label}</Text>
    </View>
  </View>
);

export default (label, source, iconSize) => (
  <DrawerItem label={label} source={source} iconSize={iconSize} />
);
