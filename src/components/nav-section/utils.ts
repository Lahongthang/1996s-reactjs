import { matchPath } from 'react-router-dom';

export const isActive = (path: string, pathName: string): boolean => {
  return !path
    ? pathName === '/'
      ? true
      : false
    : !!matchPath({ path, end: false }, pathName);
}
