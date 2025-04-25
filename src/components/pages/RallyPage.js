import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';

import {HeaderBar, ScreenWrapper, MapBack, Rally} from '../ui';

// Styling
const h4Style = {
  color: 'white',
  padding: 30,
  textAlign: 'center',
  marginTop: 30,
  fontSize: 32,
};
const viewStyle = {
  height: 150,
};
const background = {
  backgroundColor: '#3d3d3d',
};

class RallyScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <ScrollView style={background}>
          <HeaderBar title="Shows and Rallies" />
          <View style={viewStyle}>
            <MapBack>
              <Text  h4 h4Style={h4Style}>
                Upcoming Events
              </Text>
            </MapBack>
          </View>
          <Rally />
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

export default RallyScreen;
