/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { WebView } from 'react-native-webview';
// import Pdf from 'react-native-pdf';

// Layout
import { WebviewHeader, ScreenWrapper, HeaderBar } from '../ui';
import { View } from 'react-native';
const line = { height: 2, width: '100%', backgroundColor: '#484849' };

const WebviewScreen = ({ uri, title = '' }) => (
  <ScreenWrapper bg="#32323A">
    <WebviewHeader title={title} />r
    <View style={line} />
    <WebView source={{ uri }} />
  </ScreenWrapper>
);

export const ServiceCenters = () => (
  <WebviewScreen
    uri="https://www.spartanrvchassis.com/service-locator/"
    title="Service Centers"
  />
);

export const SpartanMerchandise = () => (
  <WebviewScreen
    // uri="https://shop.spartanmotors.com/?_ga=2.254985034.372994018.1573355982-602389839.1569610154"
    uri="https://shop.theshyftgroup.com/shop-by-brand/spartan-rv-chassis"
    title="Spartan RV Merchandise"
  />
);

export const Training = () => (
  <WebviewScreen
    uri="https://www.spartanrvchassis.com/owners/training/rv-owner/"
    title="Training"
  />
);

export const PartsAndAccessories = () => (
  <WebviewScreen
    uri="https://www.spartanrvchassis.com/owners/parts/"
    title="Parts and Accessories"
  />
);

export const ServiceCenterSurvey = () => (
  <WebviewScreen
    uri="https://www.surveymonkey.com/r/TH3GYJ6"
    title="Service Center Survey"
  />
);

export const ExternalScreen = ({ uri }) => {
  // const {uri} = route.params;
  return (
    <WebviewScreen uri={uri} />
  );
};

export const PDF_SCREEN = ({ loc }) => (
  <ScreenWrapper>
    <HeaderBar />
    {/* <Pdf source={loc} style={{ flex: 1 }} /> */}
  </ScreenWrapper>
)

export default WebviewScreen;
