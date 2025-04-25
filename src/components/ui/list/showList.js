import React from 'react';

import {ShowCard} from '../cards';

const ShowList = ({shows}) =>
  shows.map((show, key) => (
    <ShowCard
      key={`${show.Title} - ${key}`}
      title={show.Title}
      location={show.Location}
      start={show.StartDate}
      end={show.EndDate}
      parts={show.Parts}
      service={show.Service}
      training={show.Training}
      description={show.Description}
      link={show.Link}
    />
  ));

export default ShowList;
