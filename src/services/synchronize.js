import {API_URL} from '../utils/constants';

const responder = async response => {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(await response.text());
    error.response = response;
    throw error;
  }
};

const failed = error => {
  return error;
};

const get = async lastPulledAt => {
  return fetch(`${API_URL}/sync/${lastPulledAt}`)
    .then(responder)
    .then(response => response.json())
    .catch(error => error);
};

const set = async (changes, lastPulledAt) => {
  return fetch(`${API_URL}/sync/${lastPulledAt}`, {
    method: 'POST',
    body: JSON.stringify(changes),
  })
    .then(responder)
    .then(response => response.json())
    .catch(failed);
};

export default {get, set};
