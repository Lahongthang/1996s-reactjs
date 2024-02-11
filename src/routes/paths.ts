const ROOTS_APP = '';
const ROOTS_AUTH = '';

const path: (root: string, subLink: string) => string = (root, subLink) => `${root}${subLink}`;

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
}

export const PATH_APP = {
  root: ROOTS_APP,
  home: path(ROOTS_APP, ''),
  products: {
    index: path(ROOTS_APP, '/products'),
    all: path(ROOTS_APP, '/products/all'),
    bestSelling: path(ROOTS_APP, '/products/best-selling'),
  },
  settings: path(ROOTS_APP, '/personal-settings'),
}
