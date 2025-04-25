import React from 'react';
import {Linking, View, TouchableWithoutFeedback} from 'react-native';
import {Card, Text, ThemeProvider} from 'react-native-elements';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {logClick} from '../../apis';
import Call from '../call';
import CustomIcon from '../customIcon';
// Styling
import theme from '../../../styles/contactCardTheme';
import Icon from 'react-native-vector-icons/Fontisto';

const items = {color: '#E2231A', marginLeft: 10};
const row = {flexDirection: 'row'};
const icons = {marginTop: 6};

const ContactCard = props => {
  const {contacts} = props;

  const openEmail = e => {
    logClick(`email_${e}`);
    Linking.openURL(`mailto:${e}?cc=`);
  };
  return (
    <ThemeProvider theme={theme}>
    <Card>
      {contacts.map((contact, key) => (
        <View key={key}>
          <Text style={theme.Card.titleStyle}>{contact.name}</Text>
          <Call phoneNumber={contact.phone}>
            <View style={row}>
              <CustomIcon style={icons} size={25} name="call-outline" />
              <Text style={items}>{contact.phone}</Text>
            </View>
          </Call>
          {contact.email.length > 0 && (
            <TouchableWithoutFeedback onPress={() => openEmail(contact.email)}>
              <View style={row}>
                <Icon style={icons} size={25} name="email" />
                <Text style={{ ...items, fontSize: RFPercentage(2.2) }}>
                  {contact.email}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      ))}
    </Card>
  </ThemeProvider>
  );
};

export default ContactCard;
