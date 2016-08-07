import { basename } from 'path';

export const importAll = (context, excludes) => (
  context.keys().filter(fileName => (
    excludes.indexOf(fileName) === -1
  )).map(context)
);

export const importAllAsMap = (context, excludes = [], ext = '.js') => {
  const result = {};
  for (const fileName of context.keys()) {
    if (excludes.indexOf(fileName) !== -1) {
      continue;
    }
    result[basename(fileName, ext)] = context(fileName);
  }
  return result;
};
