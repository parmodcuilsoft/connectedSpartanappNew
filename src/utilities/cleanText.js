// utils.js
import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();
const entity = /&#.*;/g;

export const cleanText = str => {
  return str.replace(entity, match => entities.decode(match));
};
