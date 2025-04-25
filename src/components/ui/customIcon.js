

// CallButton.js
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomIcon = ({size = 25, color = '#000',name,style }) => {
  return (
      <Icon style={style} name={name} size={size} color={color} />
  );
};


export default CustomIcon;
