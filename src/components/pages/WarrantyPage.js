import React from 'react';
import {ScrollView, View} from 'react-native';

import {
  HeaderBar,
  Registration,
  MapBack,
  ScreenWrapper,
  Warranties,
} from '../ui';

const panelContainer = {height: 270};

const WarrantyScreen = () => (
  <ScreenWrapper>
    <ScrollView>
      <HeaderBar title="Warranty Information" />
      <View style={panelContainer}>
        <MapBack>
          <Registration />
        </MapBack>
      </View>
      <Warranties />
    </ScrollView>
  </ScreenWrapper>
);

export default WarrantyScreen;
