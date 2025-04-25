import React from 'react';
import {View} from 'react-native';
import {Card, Text, ThemeProvider} from 'react-native-elements';

// Styling
import theme from '../../../styles/diagCardTheme';
const bold = {fontFamily: 'SourceSansPro-SemiBold'};
const row = {
  flexDirection: 'row',
};
const item = {width: '25%'};

const Response = ({content}) => (
  <ThemeProvider theme={theme}>
    <Card>
      <Text style={bold}>{content}</Text>
    </Card>
  </ThemeProvider>
);

export const ErrorResponse = () => (
  <Response content="No matching Fault Codes. Try a few digits at a time." />
);

export const LoadingResponse = () => <Response content="Loading" />;

const LabelAndText = ({label, children}) => (
  <View style={row}>
    <Text>
      <Text style={bold}>{label} </Text>
      {children}
    </Text>
  </View>
);

const CheckBox = ({title, checked}) => (
  <View style={item}>{checked && <Text>{title}</Text>}</View>
);

const DiagCard = ({
  code: {
    'SAE J1939 SPN': SAEJ1939SPN,
    'SAE J1939 FMI': SAEJ1939FMI,
    'Lamp Color': LampColor,
    MIL,
    'Fault Code': FaultCode,
    'J1939 SPN/FMI Description': Description,
    'Applicable to X15 2020': X15_2020,
    'Applicable to L9 2021': L9_2021,
    'Applicable to B 2021': B_2021,
    'Applicable to X12 2021': X12_2021,
  },
}) => (
  <ThemeProvider theme={theme}>
    <Card>
      <LabelAndText label="SAE J1939 SPN:">{SAEJ1939SPN}</LabelAndText>
      <LabelAndText label="SAE J1939 FMI:">{SAEJ1939FMI}</LabelAndText>
      <LabelAndText label="Lamp Color:">{LampColor}</LabelAndText>
      <LabelAndText label="MIL:">{MIL}</LabelAndText>
      <LabelAndText label="Fault Code:">{FaultCode}</LabelAndText>
      <LabelAndText label="Description:">{Description}</LabelAndText>
      <Text style={bold}>Applicable to:</Text>
      <View style={row}>
        <CheckBox title="X15 2020" checked={X15_2020} />
        <CheckBox title="L9 2021" checked={L9_2021} />
        <CheckBox title="X12 2021" checked={X12_2021} />
        <CheckBox title="B 2021" checked={B_2021} />
      </View>
    </Card>
  </ThemeProvider>
);

export default DiagCard;
