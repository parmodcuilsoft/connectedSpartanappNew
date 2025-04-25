import React from 'react';
import {ImageBackground} from 'react-native';

// constant
const path = '../../assets/map.png';
// style
const imageStyle = {width: '100%', height: '100%', resizeMode: 'contain'};

// MapBack is the background image of the map
const MapBack = ({children}) => (
  <ImageBackground style={imageStyle} source={require(path)}>
    {children}
  </ImageBackground>
);

export default MapBack;
