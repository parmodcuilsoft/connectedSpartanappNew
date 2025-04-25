import React from 'react';
import {View} from 'react-native';

import {DiagCard} from '..';

const margin = {margin: 5};

const DiagList = ({codes}) =>
  codes.map((code, index) => (
    <View key={index} style={margin}>
      <DiagCard code={code} />
    </View>
  ));

export default DiagList;
