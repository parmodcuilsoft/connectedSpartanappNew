/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import { OneSignal} from 'react-native-onesignal';
import {useNavigation} from '@react-navigation/native';
// styling
let fitContentsToScreen = {
  flex: 1,
  height: '100%',
  backgroundColor: '#484849',
  paddingTop:28
};

const pages = {
  home: 'Home',
  maintenance: 'Maintenance Schedule',
  service: 'Service Centers',
  inspection: 'Pre-Trip Inspection',
  diagCodes: 'Diagnostic Codes',
  contacts: 'Key Contacts',
  shows: 'Shows and Rallies',
  warranty: 'Warranty Information',
  merch: 'Spartan Merchandise',
  training: 'Training',
  parts: 'Parts and Accessories',
  survey: 'Service Center Survey',
  profile: 'Profile',
  external: 'External',
  myRV: 'My RV Information',
};

const pageKeys = Object.keys(pages);

const ScreenWrapper = ({ children, bg}) => {
  const navigation = useNavigation();
  OneSignal.initialize('3aa53935-672e-4de5-af92-c64df1eb629b');
  fitContentsToScreen = bg
    ? {...fitContentsToScreen, backgroundColor: bg}
    : fitContentsToScreen;
  const onOpened = openResult => {
    const data = openResult.notification.payload.additionalData;
    const keys = Object.keys(data);
    if (keys.includes('page')) {
      if (data.page === 'external' && keys.includes('url')) {
        navigation.navigate('External', {
          uri: data.url,
        });
      } else if (data.page !== 'external' && pageKeys.includes(data.page)) {
        navigation.navigate(pages[data.page]);
      } else {
        console.log(
          'page is ',
          openResult.notification.payload.additionalData.page,
        );
      }
    }
  };

  useEffect(() => {
    OneSignal.Notifications.addEventListener('opened', onOpened);
    return () => OneSignal.Notifications.removeEventListener('opened', onOpened);
  }, []);

  return <SafeAreaView style={fitContentsToScreen}>{children}</SafeAreaView>;
};

ScreenWrapper.defaultProps = {
  bg: null,
};

export default ScreenWrapper;