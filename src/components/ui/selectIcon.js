import React from 'react';
import {View} from 'react-native';

// import CustomIcon from './customIcon';
import Icon from 'react-native-vector-icons/AntDesign';

// Styling
const roundSelectableView = {
  borderWidth: 1,
  borderColor: '#5b5b5b',
  borderRadius: 50,
  width: 30,
  height: 30,
  overflow: 'hidden',
  padding: 0,
};
const roundSelectedView = {
  ...roundSelectableView,
  borderWidth: 0,
};
const iconStyle = {
  color: '#E2231A',
  marginLeft: -1,
  marginTop: -1,
};

const SelectIcon = ({click}) => {
  return (
    <View style={click ? roundSelectedView : roundSelectableView}>
      {click && <Icon size={32} name="checkcircle" style={iconStyle} />}
    </View>
  );
};

export default SelectIcon;
