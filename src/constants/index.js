const ENV = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
};

const StorageKey = {
  authUser: '@auth:user',
};

const ROUTES = {
  ROOT_PATH: '/',
  LOGIN_PATH: '/signin',
  RECORD_PATH: '/my-records',
  COLUMN_PATH: '/columns',
};

export const HEADER = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Contact', url: '/contact' },
  { id: 3, name: 'Privacy Policy', url: '/privacy-policy' },
];

const PAGE_SIZE = 10;

export { ENV, ROUTES, StorageKey, PAGE_SIZE };
