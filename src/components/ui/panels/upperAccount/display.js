import React from 'react';
import {View} from 'react-native';
import {Text, Button, ThemeProvider} from 'react-native-elements';

import theme from '../../../../styles/upperAccountTheme';
const center = {alignItems: 'center', marginTop: 20};
const left = {alignItems: 'flex-start', marginTop: 30};
const sideBySide = {flexDirection: 'row'};

const Display = ({
  user: {fName, lName, vin, email, phone, purchaseDate, make, model},
  signOut,
  edit,
}) => (
  <View style={center}>
    <ThemeProvider theme={theme}>
      <Text h2>Hello</Text>
      <Text h2>{fName + ' ' + lName}</Text>
      <Button type="clear" title="Sign out" onPress={signOut} />
      <View style={left}>
        <LabelAndContent label="VIN" content={vin} />
        <LabelAndContent label="Email" content={email} />
        <LabelAndContent label="Phone" content={phone} />
        <LabelAndContent label="Date of Purchase" content={purchaseDate} />
        <LabelAndContent label="Make" content={make} />
        <LabelAndContent label="Model" content={model} />
        <Button type="clear" title="edit" onPress={edit} />
      </View>
    </ThemeProvider>
  </View>
);

const LabelAndContent = ({label, content}) => (
  <View style={sideBySide}>
    <ThemeProvider theme={theme}>
      <Text h4>{`${label}: `}</Text>
      <Text>{content}</Text>
    </ThemeProvider>
  </View>
);

export default Display;
