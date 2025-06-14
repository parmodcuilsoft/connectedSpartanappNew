import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RFPercentage } from 'react-native-responsive-fontsize';
import createDrawerItem from './drawerItem';
import { View, Text, Image, Button } from 'react-native';
import Iconkey from 'react-native-vector-icons/AntDesign';
import IconTrip from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../../pages/HomePage';
import MyRVPage from '../../pages/MyRVPage';
import TrainingScreen from '../../pages/TrainingPage';
import ContactsScreen from '../../pages/ContactsPage';
import PartsAndAccessoriesScreen from '../../pages/PartsAndAccessoriesPage';
import ServiceCentersPageScreen from '../../pages/ServiceCentersPage';
import SpartanMerchandisePageScreen from '../../pages/SpartanMerchandisePage';
import ExternalScreenPageScreen from '../../pages/ExternalScreenPage';
import InspectionScreen from "../../pages/InspectionPage";
import DiagnosticScreen from "../../pages/DiagnosticPage";
import MaintenanceScreen from "../../pages/MaintenancePage";
import RallyScreen from "../../pages/RallyPage";
import WarrantyScreen from "../../pages/WarrantyPage";
import PDF_SCREEN from "../../pages/PdfPage";
import ServiceCenterSurveyPage from '../../pages/ServiceCenterSurveyPage';


// Import screensrrr
// import {
//   MaintenanceScreen,
//   ServiceCenters,
//   InspectionScreen,
//   DiagnosticScreen,
//   ContactsScreen,
//   RallyScreen,
//   WarrantyScreen,
//   SpartanMerchandise,
//   PartsAndAccessories,
//   ServiceCenterSurvey,
//   MyRVPage,
//   ExternalScreen,
//   PDF_SCREEN,
//   TrainingScreen,
//   PartsAndAccessoriesScreen,
//   ServiceCentersPageScreen,
//   SpartanMerchandisePageScreen,
//   ExternalScreenPageScreen
// } from '../../pages';

const Drawer = createDrawerNavigator();

const styles = {
  inLine: {
    flexDirection: 'row',
    borderBottomColor: '#000',
    paddingVertical: 5,
    padding: 10,
  },
  labelWrapper: {
    flex: 3,
  },
  labelStyle: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: RFPercentage('2.5'),
    color: '#000000',
    fontWeight: 700,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 20,
  },
};

const InformationLabel = () => {
  return (
    <View style={styles.inLine}>
      <View style={styles.iconWrapper}>
        <Image source={require('../../../assets/MyInfo.png')} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelStyle}>My RV Information</Text>
      </View>
    </View>
  );
};

const PartsLabel = () => {
  return (
    <View style={styles.inLine}>
      <View style={styles.iconWrapper}>
        <Image resizeMode="contain" style={{ width: 30, height: 35 }} source={require('../../../assets/piston.png')} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelStyle}>Parts and Accessories</Text>
      </View>
    </View>
  );
};


const ServiceCenterSurveyLabel = () => {
  return (
    <View style={styles.inLine}>
      <View style={styles.iconWrapper}>
        <Image resizeMode="contain" style={{ width: 30, height: 35 }} source={require('../../../assets/survey.png')} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelStyle}>Service Center Survey</Text>
      </View>
    </View>
  );
};





const KeyContactsLabel = () => {
  return (
    <View style={styles.inLine}>
      <View style={styles.iconWrapper}>
        <Iconkey name="contacts" size={25} color={'#000'} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelStyle}>Key Contacts</Text>
      </View>
    </View>
  );
};



const PreTripInspectionLabel = () => {
  return (
    <View style={styles.inLine}>
      <View style={styles.iconWrapper}>
        <IconTrip name='bus' size={25} color={"#000"} />
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelStyle}>Pre-Trip Inspection</Text>
      </View>
    </View>
  );
};

const DiagnosticLabel = () => {
  return (
    <View style={styles.inLine}>
      <View style={styles.iconWrapper}>
        <Text style={{ color: "#000", fontWeight: 'bold', textDecorationLine: 'underline', fontSize: RFPercentage(2) }}>0102</Text>
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.labelStyle}>Diagnostic Codes</Text>
      </View>
    </View>
  );
};




const AppNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3d3d3d', // Change to your desired color
        },
        headerTintColor: '#fff', // Change the header text color
        drawerStyle: {
          width: "90%"
        },
        drawerActiveTintColor: "#fff",
      }}
      initialRouteName="Home"

    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: () => createDrawerItem('Home', 'home-outline', 26),
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="My RV Information"
        component={MyRVPage}
        options={{
          drawerItemStyle: {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: InformationLabel,
        }}

      />
      <Drawer.Screen
        name="Training"
        component={TrainingScreen}
        options={{
          drawerItemStyle: {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: () => createDrawerItem('Training Academy', 'book-outline', 24),
        }}
      />
      <Drawer.Screen
        name="Key Contacts"
        component={ContactsScreen}
        options={{
          drawerItemStyle: {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: KeyContactsLabel,
        }}
      />
      <Drawer.Screen
        name="Parts and Accessories"
        component={PartsAndAccessoriesScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: PartsLabel,


        }}
      />
      <Drawer.Screen
        name="Service Centers"
        component={ServiceCentersPageScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: () => createDrawerItem('Service Centers', 'location-outline', 30),
        }}
      />
      <Drawer.Screen
        name="Pre-Trip Inspection"
        component={InspectionScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: PreTripInspectionLabel,
        }}
      />
      <Drawer.Screen
        name="Diagnostic Codes"
        component={DiagnosticScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: DiagnosticLabel,
          // drawerLabel: () => createDrawerItem('Diagnostic Codes', 'code', 18),
        }}
      />
      <Drawer.Screen
        name="Maintenance Schedule"
        component={MaintenanceScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: () => createDrawerItem('Maintenance Schedule', 'calendar-outline', 26),
        }}
      />
      <Drawer.Screen
        name="Shows and Rallies"
        component={RallyScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: () => createDrawerItem('Shows and Rallies', 'star-outline', 26),
        }}
      />
      <Drawer.Screen
        name="Warranty Information"
        component={WarrantyScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: () => createDrawerItem('Warranty Information', 'shield-outline', 28),
        }}
      />
      
      <Drawer.Screen
        name="Service Center Survey"
        component={ServiceCenterSurveyPage}
        options={{
          drawerItemStyle: {
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: ServiceCenterSurveyLabel,
        }}
      />

      <Drawer.Screen
        name="Spartan Merchandise"
        component={SpartanMerchandisePageScreen}
        options={{
          drawerItemStyle: {
            width: "100%",
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            marginLeft: 0,
            paddingLeft: 0,
          },
          headerShown: false,
          drawerLabel: () => createDrawerItem('Spartan Merchandise', 'cart-outline', 24),
        }}
      />
      <Drawer.Screen
        name="External"
        component={ExternalScreenPageScreen}
        options={{
          drawerLabel: () => null,
          headerShown: false
        }}
      />

      <Drawer.Screen
        name="PDFScreen"
        component={PDF_SCREEN}
        options={{
          drawerLabel: () => null,
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
