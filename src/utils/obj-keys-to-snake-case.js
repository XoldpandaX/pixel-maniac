import snakeCase from 'lodash/snakeCase';

export default function (obj) {
  const keyToSnakeCase = Object.entries(obj)
    .map(([ key, el ]) => (
      key.match(/[A-Z]/g)
        ? [snakeCase(key), el]
        : [key, el]
    ));
  
  return Object.assign(...keyToSnakeCase.map(([key, el]) => ({ [key]: el })));
}
