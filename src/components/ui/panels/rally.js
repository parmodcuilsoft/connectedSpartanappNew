import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { withEvents } from '../../apis';
import { ShowList } from '..';
import { parse, isAfter, isBefore } from 'date-fns';

// Style
const titleStyle = { color: 'white', textAlign: 'center', paddingTop: 30 };
const containerStyle = { alignItems: 'center' };

const dateFormat = 'MM/dd/yyyy';

const Rally = ({ update, events }) => {
  if (!events || events.length < 1) {
    return [0, 0].map((_, key) => <View key={key} />);
  } else {
    const currentDate = new Date();

    return (
      <View>
        <View style={containerStyle}>
          <ShowList
            shows={events.filter(event =>
              isAfter(parse(event.StartDate, dateFormat, new Date()), currentDate)
            )}
          />
        </View>
        <View style={containerStyle}>
          <Text h4 h4Style={titleStyle}>
            Past Events
          </Text>
          <ShowList
            shows={events
              .filter(event =>
                isBefore(parse(event.StartDate, dateFormat, new Date()), currentDate)
              )
              .sort((a, b) =>
                parse(b.StartDate, dateFormat, new Date()) - parse(a.StartDate, dateFormat, new Date())
              )}
          />
        </View>
      </View>
    );
  }
};

export default withEvents(Rally);
