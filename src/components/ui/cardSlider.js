import React from 'react';
import { FlatList, View } from 'react-native';
import { Text, Button, ThemeProvider } from 'react-native-elements';
import { parse, isAfter } from 'date-fns';

import { withEvents } from '../apis';
import { MapBack, ShowCard } from '.';
import { decode } from 'html-entities';

// Styling
import cardSliderTheme from '../../styles/cardSliderTheme';
const container = { height: 620 };
const content = { paddingLeft: 20 };

const CardSlider = ({ events, updateEvents, goToRallies = () => { } }) => {

  const filteredEvents =
  events &&
  events
    .map(event => ({
      ...event,
      parsedDate: parse(event.StartDate, 'MM/dd/yyyy', new Date())
    }))
    .filter(event => isAfter(event.parsedDate, new Date()))
    .sort((a, b) => a.parsedDate - b.parsedDate);    

  return (
    <ThemeProvider theme={cardSliderTheme}>
      <View style={container}>
        <MapBack>
          <Text h4>Shows and Rallies</Text>
          <View>
            <FlatList
              horizontal={true}
              data={filteredEvents}
              keyExtractor={item => item.Title}
              renderItem={({ item }) => {
                return (
                  <View style={content}>
                    <ShowCard
                      title={decode(item.Title) || "..."}
                      location={item.Location}
                      start={item.StartDate}
                      end={item.EndDate}
                      parts={item.Parts}
                      service={item.Service}
                      training={item.Training}
                      description={item.Description}
                      link={item.Link}
                    />
                </View>
                );
              }}
            />
            <Button
              title="See all"
              type="clear"
              onPress={() => goToRallies()}
            />
          </View>
        </MapBack>
      </View>
    </ThemeProvider>
  );
};

export default withEvents(CardSlider);
