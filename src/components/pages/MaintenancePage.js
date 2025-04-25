import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import {
  HeaderBar,
  ExpandableList,
  UpperMaintenance,
  ScreenWrapper,
} from '../ui';

// Constants
import * as expandableItems from '../../json/maintenance.json';

class MaintenanceScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <ScrollView>
          <HeaderBar title="Maintenance Schedule" />
          <UpperMaintenance>
            <ExpandableList bg="#28282A" expandableItems={expandableItems} />
          </UpperMaintenance>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

export default MaintenanceScreen;
