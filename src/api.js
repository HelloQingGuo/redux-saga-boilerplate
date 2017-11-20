import axios from 'axios';

// export async function getItem(payload) {
//   return await axios
//     .get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
//     .then(function(response) {
//       return response;
//     })
//     .catch(function(error) {
//       return error;
//     });
// }

export function getItem(param) {
  // query builder
  const url = `https://jsonplaceholder.typicode.com/posts/${param}`;
  return axios.get(url);
}

// try {
//   console.log('async call');
//
//     axios.get,
//     'https://jsonplaceholder.typicode.com',
//     {
//       id: action.payload
//     }
//
//   console.log('response', response);
//   // yield put(receiveCertainData(response));
// } catch (e) {
//   console.log('err', e);
// }
