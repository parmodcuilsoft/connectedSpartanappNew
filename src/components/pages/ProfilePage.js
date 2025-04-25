import React from 'react';
import {ScrollView} from 'react-native';

import {ScreenWrapper, HeaderBar, UpperAccount} from '../ui';

const ProfileScreen = () => (
  <ScreenWrapper>
    <ScrollView>
      <HeaderBar title="Account" />
      <UpperAccount />
    </ScrollView>
  </ScreenWrapper>
);

export default ProfileScreen;
