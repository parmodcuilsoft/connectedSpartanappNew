/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Video from 'react-native-video';

import {HeaderBar, ExpandableList, Progress, ScreenWrapper} from '../ui';
// Constants
import * as expandableItems from '../../json/inspection.json';

const categories = Object.keys(expandableItems);

const InspectionScreen = () => {
  const [count, setCount] = useState(0);
  const max = categories.reduce((acc, item) => {
    if (expandableItems[item].length) {
      return acc + expandableItems[item].length;
    } else {
      return acc;
    }
  }, 0);
  const toggleSubField = click =>
    click ? setCount(count + 1) : setCount(count - 1);
  return (
    <ScreenWrapper>
      {count < max ? (
        <View>
          <ScrollView style={{marginBottom: 60}}>
            <HeaderBar title="Pre-Trip Inspection Checklist" />
            <ExpandableList
              bg="#28282A"
              expandableItems={expandableItems}
              toggleParentCount={toggleSubField}
            />
          </ScrollView>
          <Progress val={count} max={max} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <HeaderBar title="Pre-Trip Inspection Checklist" />
          <Video
            source={require('../../assets/CheckList-complete.mp4')}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>
      )}
    </ScreenWrapper>
  );
};

export default InspectionScreen;
