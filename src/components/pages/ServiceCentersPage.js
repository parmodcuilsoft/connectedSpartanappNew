import React from 'react';
import { View } from 'react-native';
import { ScreenWrapper, WebviewHeader } from '../ui';
import WebView from 'react-native-webview';

const ServiceCentersPage = () => {
    const line = { height: 2, width: '100%', backgroundColor: '#484849' };

    return (
        <ScreenWrapper bg="#32323A">
            <WebviewHeader title="Service Centers" />
            <View style={line} />
            <WebView source={{ uri: "https://www.spartanrvchassis.com/service-locator/" }} />
        </ScreenWrapper>
    );
};

export default ServiceCentersPage;
