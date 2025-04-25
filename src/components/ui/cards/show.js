/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Card, Text, ThemeProvider, Button } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';

import CustomIcon from '../customIcon';
import { cleanText } from '../../../utilities';
import { logClick } from '../../apis';

// Styling
import showCardTheme from '../../../styles/showCardTheme';
import { useNavigation } from '@react-navigation/native';
const bold = { fontWeight: 'bold' };
const fieldGroup = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 8,
  marginBottom: 8,
};
const spacing = { marginTop: 3 };
const iconStyle = { color: '#E2231A', marginTop: 3 };
const lastWrapper = { marginTop: 10, justifyContent: 'left' };
const titleWrapper = { backgroundColor: 'black',justifyContent: 'center', padding: 8, marginBottom: 20 };
const titleCollor = { color: 'white', fontSize: RFPercentage('3'), fontWeight: "800", marginLeft: 20 };

const ShowCard = ({
  title,
  location,
  start,
  end,
  parts,
  service,
  training,
  description,
  link = '',
}) => {
  const navigation = useNavigation();
  return (
    <ThemeProvider theme={showCardTheme}>
      <Card>
        <View style={titleWrapper}>
          <Text style={titleCollor}>
            {title}
          </Text>
        </View>
        <View>
          <LabelAndText label="Where: ">{location}</LabelAndText>
          <LabelAndText label="From: ">{start}</LabelAndText>
          <LabelAndText label="To: ">{end}</LabelAndText>
        </View>
        <View style={fieldGroup}>
          <LabelAndText label="Parts: ">{parts}</LabelAndText>
          <LabelAndText label="Service: ">{service}</LabelAndText>
          <LabelAndText label="Training: ">{training}</LabelAndText>
        </View>
        <View>
          <LabelAndText label="Description: " flexDirection="column">
            {description}
          </LabelAndText>
          <Button iconPosition='right'
            type="clear"
            title="Learn more"
            icon={<CustomIcon size={25} style={iconStyle} name="chevron-forward-circle" />}
            containerStyle={{ alignItems: 'flex-start' }} // Aligns the button container to the left
            buttonStyle={{ justifyContent: 'flex-start' }} // Aligns content inside the button to the left
            onPress={() => {
              logClick(`open_link_${link}`);
              navigation.navigate('External', {
                uri: link,
              });
            }}
          />
        </View>
      </Card>
    </ThemeProvider>
  );
};

const LabelAndText = ({ label, children, flexDirection = 'row' }) => (
  <View style={{ flexDirection, spacing }}>
    <Text style={bold}>{label}</Text>
    <Text numberOfLines={4}>{children}</Text>
  </View>
);

export default ShowCard;
