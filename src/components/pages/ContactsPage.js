import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-elements';

import {HeaderBar, ContactCard, ScreenWrapper} from '../ui';

// Styling
const pageStyle = {
  backgroundColor: '#3d3d3d',
  paddingTop: 16,
  paddingBottom: 30,
};
const titleStyle = {
  color: 'white',
  textAlign: 'center',
  fontFamily: 'SourceSansPro-Semibold',
  fontSize: 34,
  margin: 20,
  marginTop: 10,
  marginBottom: 10,
};

// Constants
import * as keyContacts from '../../json/contacts.json';

const keyCategories = Object.keys(keyContacts);

const Category = ({title, contacts}) => {
  if (!contacts.length) {
    return null;
  }
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      {/* {contacts.map((contact, key) => ( */}
      <ContactCard
        contacts={contacts}
        // key={`${title}-${key}`}
        // name={contact.name}
        // phone={contact.phone}
        // email={contact.email || ''}
      />
      {/* ))} */}
    </View>
  );
};

class ContactsScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <ScrollView>
          <HeaderBar title="Key Contacts" />
          <View style={pageStyle}>
            {keyCategories.map((category, key) => (
              <Category
                key={key}
                title={category}
                contacts={keyContacts[category]}
              />
            ))}
          </View>
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

export default ContactsScreen;
