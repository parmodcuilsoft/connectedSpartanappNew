import React from 'react';
import { View } from 'react-native';
import {
  ScreenWrapper,
  WebviewHeader,
} from '../ui';
import WebView from 'react-native-webview';


const WarrantyScreen = () => {

  const line = { height: 2, width: '100%', backgroundColor: '#484849' };

  return (
    <ScreenWrapper bg="#32323A">
      <WebviewHeader title="Warranty Information" />
      <View style={line} />
      <WebView source={{ uri: "https://spartanrvchassis.com/custom-motorhome-chassis-limited-warranty/" }} />
    </ScreenWrapper>
  );
}

export default WarrantyScreen;


