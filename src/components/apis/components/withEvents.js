import React from 'react';

import {useApiWithStorage} from '..';

const eventsKey = 'EVENTS_V1';
const url = 'https://www.spartanrvchassis.com/wp-json/api/v1/events';

const withEvents = WrappedComponent => props => {
  const [events, updateEvents] = useApiWithStorage(eventsKey, url);
  return (
    <WrappedComponent
      update={updateEvents}
      events={
        events &&
        events.sort((a, b) => Date.parse(a.StartDate) - Date.parse(b.StartDate))
      }
      {...props}
    />
  );
};

export default withEvents;
