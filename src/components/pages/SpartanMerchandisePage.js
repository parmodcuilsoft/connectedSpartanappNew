import React from 'react';
import { View } from 'react-native';
import { ScreenWrapper, WebviewHeader } from '../ui';
import WebView from 'react-native-webview';

const SpartanMerchandisePage = () => {
    const line = { height: 2, width: '100%', backgroundColor: '#484849' };

    return (
        <ScreenWrapper bg="#32323A">
            <WebviewHeader title="Spartan RV Merchandise" />
            <View style={line} />
            <WebView source={{ uri: "https://shop.theshyftgroup.com/shop-by-brand/spartan-rv-chassis" }} />
        </ScreenWrapper>
    );
};

export default SpartanMerchandisePage;
