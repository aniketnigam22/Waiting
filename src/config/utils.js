import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    //console.log(userData.accessToken, 'header')
    return {
      authorization: `${userData.access_token}`,
    };
  }
  return {};
}

export async function apiReq(
  endPoint,
  data,
  method,
  headers,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    // const getTokenHeader = await getHeaders();
    // headers = {
    //   ...getTokenHeader,
    //   ...headers,
    // };

    // if (method === 'get' || method === 'delete') {
    // }
    axios[method](
      endPoint,
      {Waiting: data},
      {headers: {'Content-Type': 'application/json'}},
    )

      .then(result => {
        // console.log(headers);
        const {data} = result;
        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch(error => {
        if (error && error.response && error.response.status === 401) {
          clearUserData();
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
      });
  });
}

export function apiPost(endPoint, data) {
  return apiReq(endPoint, data, 'post');
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

// export function apiGet(
//   endPoint,
//   headers = {
//     'app-id': '6435741cf7c671412bf21c13',
//   },
//   requestOptions,
// ) {
//   return apiReq(endPoint, 'get', headers, requestOptions);
// }

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}

export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
}

export const removeItemFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Item removed successfully');
  } catch (error) {
    console.error('Error removing item:', error);
    // Handle error
  }
};