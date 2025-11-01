import React from 'react';

import {ShowCard} from '../cards';
import { decode } from 'html-entities';

const ShowList = ({shows}) =>
  shows.map((show, key) => {
    return(
    <ShowCard
      key={`${show.Title} - ${key}`}
      title={decode(show.Title) || "..."}
      location={show.Location}
      start={show.StartDate}
      end={show.EndDate}
      parts={show.Parts}
      service={show.Service}
      training={show.Training}
      description={show.Description}
      link={show.Link}
    />
  )
  });

export default ShowList;
