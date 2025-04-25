import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import {
  HeaderBar,
  CardSlider,
  LowerHome,
  ScreenWrapper,
  Marketing,
} from '../ui';
import { logClick } from '../apis';

class HomeScreen extends Component {
  goToRallies = () => {
    logClick('see_all_rallies');
    this.props.navigation.navigate('Shows and Rallies');
  };

  render() {
    return (
      <ScreenWrapper>
        <ScrollView>
          <HeaderBar title="Home" />
          <Marketing />
          <LowerHome />
          <CardSlider goToRallies={this.goToRallies} />
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;
