/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Call from '../call';
import CustomIcon from '../customIcon';
import { logClick } from '../../apis';
import { useNavigation } from '@react-navigation/native';

// import MyRVPage from '../../pages/MyRVPage';

const buttonContainer = {
  backgroundColor: '#3C3D3C',
  padding: 10,
  paddingTop: 20,
};
const inline = { flexDirection: 'row' };
const upperButtonTitle = { color: 'white' };
const upperButton = {
  height: 75,
  backgroundColor: '#E2231A',
};
const iconStyle = {
  padding: 5,
  color: '#E2231A',
  fontWeight: 'bold',
};
const callIcon = {
  fontWeight: 'bold',
  marginRight: -10,
  marginTop: 5,
};
const theme = {
  Button: {
    buttonStyle: {
      backgroundColor: 'white',
      height: 125,
      padding: 20,
      margin: 5,
      marginLeft: 3,
      marginRight: 3,
      flexDirection: 'column',
    },
    titleStyle: {
      padding: 20,
      fontSize: RFPercentage(1.9),
      color: 'black',
      fontFamily: 'SourceSansPro-Black',
      fontWeight: 'bold',
      marginTop: 5,
    },
    containerStyle: {
      flex: 1,
    },
  },
};
const call = '1-800-543-4277';

const LowerPanel = () => {
  const navigation = useNavigation()
  return (
    <View style={buttonContainer}>
      <ThemeProvider theme={theme}>
        {/* In case they want to have the button on the home page this navigates to the My RV info page */}
        {/* <Button
          type='solid'
          title='My RV Information'
          icon={<CustomIcon style={iconStyle} size={24} name="MyRV" />}
          onPress={()=>{
            logClick('redirect_to_MyRVPage')
            navigation.navigate(MyRVPage)
          }}
        /> */}
        <Call phoneNumber={call}>
          <Button
            title="Call Customer Service"
            icon={<CustomIcon style={callIcon} size={20} name="call-outline" />}
            buttonStyle={{ flexDirection: 'row' }}
          />
        </Call>
        <Button
          type="solid"
          title="Pre-Trip Checklist"
          onPress={() => {
            logClick('redirect_to_pre-trip_checklist');
            navigation.navigate('Pre-Trip Inspection');
          }}
          titleStyle={upperButtonTitle}
          buttonStyle={upperButton}
        />
        <View style={inline}>
          <Button
            type="solid"
            icon={
              <Text style={{
                color: '#E2231A',
                fontWeight: 'bold', textDecorationLine: 'underline', fontSize: RFPercentage(2)
              }}>0102</Text>
            }
            title="Diagnostic Codes"
            onPress={() => {
              logClick('redirect_to_diagnostic_codes');
              navigation.navigate('Diagnostic Codes');
            }}
          />
          <Button
            type="solid"
            title="Service Centers"
            icon={
              <CustomIcon size={26} style={iconStyle} name="location-outline" />
            }
            onPress={() => {
              logClick('redirect_to_service_centers');
              navigation.navigate('Service Centers');
            }}
          />
        </View>
      </ThemeProvider>
    </View>
  )
}

export default LowerPanel;
