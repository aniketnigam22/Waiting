import { debugLog } from '../Common/commonfunction';

// http://192.168.29.136:3002/
// const API_BASE_URL = 'http://192.168.29.136:3002/'
// const API_BASE_URL = 'http://192.168.29.237:8100/'
// const API_BASE_URL = 'http://35.159.9.64:8100/'
const API_BASE_URL = 'https://demoapps.in:8100/'

const getEndpoint = text => {
  return API_BASE_URL + text;
};
export const getimage = text => {
  return API_BASE_URL + 'media/' + text;
};
export const loginurl = getEndpoint('users/sign-in');














