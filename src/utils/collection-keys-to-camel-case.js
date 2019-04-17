import camelCase from 'lodash/camelCase';

export default function (collection) {
  return collection.map((el) => {
    const entries = Object.entries(el);
  
    return Object.assign(...entries.map(([key, el]) => ({ [camelCase(key)]: el })))
  });
}
