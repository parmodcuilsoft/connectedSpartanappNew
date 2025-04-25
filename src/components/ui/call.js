import React from 'react';

// Linking and Platform are used for the functionality
// View and TouchableWithoutFeedback are how the component is used
// If TouchableWithoutFeedback or View incorporate any visual change in the app, these should be split
import {Linking, Platform, View, TouchableWithoutFeedback} from 'react-native';

import {logClick} from '../apis';

const Call = ({phoneNumber, children}) => {
  // makeCall uses platform specific linking to open the number to dial
  const makeCall = () => {
    const number = interpretNumber(phoneNumber);
    logClick(`call_${number}`);
    if (Platform.OS === 'android') {
      return Linking.openURL(`tel:${number}`);
    } else {
      return Linking.openURL(`telprompt:${number}`);
    }
  };

  // interpretNumber is used for recognizing when a phone number has an extension
  const interpretNumber = number => {
    if (number.includes('ext.')) {
      const loc = number.indexOf('ext.');
      const n = number.slice(0, loc) + ',,,' + number.slice(loc + 4);
      return n;
    } else {
      return number;
    }
  };
  // View has pointerEvents set to box-only.
  // This should allow this component to wrap a button or a text
  // while controlling the onPress functionality
  return (
    <TouchableWithoutFeedback onPress={() => makeCall()}>
      <View pointerEvents="box-only">{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default Call;
