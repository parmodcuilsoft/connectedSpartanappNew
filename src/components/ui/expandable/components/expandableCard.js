import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Card, Text, ThemeProvider} from 'react-native-elements';
// Style
import theme from '../../../../styles/expandableTheme';
const rotate = {transform: [{rotate: '45deg'}]};
const flexEnd = {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'};

const ExpandableCard = ({title, children, open, toggleOpen, counter = ''}) => (
  <View>
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback onPress={toggleOpen}>
        <Card>
          <Text h2 style={open && rotate}>
            +
          </Text>
          <Text>{title}</Text>
          <View style={flexEnd}>
            <Text>{counter}</Text>
          </View>
        </Card>
      </TouchableWithoutFeedback>
    </ThemeProvider>
    {open && children}
  </View>
);

export default ExpandableCard;
