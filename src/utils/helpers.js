import AsyncStorage from '@react-native-community/async-storage';

export const isNumber = value => {
  if (typeof value === 'number') {
    return value - value === 0;
  }
  if (typeof num === 'string' && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }
  return false;
};

export const isNil = value => {
  return value === undefined || value === null;
};

export const isEmpty = array => {
  return array instanceof Array && array.length === 0;
};

export const getToken = async () => {
  return JSON.parse(await AsyncStorage.getItem('@app:authToken')) || null;
};

export const dateByTimeZoneSaoPaulo = date => {
  return new Date(date).toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};

export const sortByLocaleCompare = (items, value) => {
  var collection = [].concat(items);
  if (value) {
    return collection.sort((a, b) => a[value].localeCompare(b[value]));
  }
  return collection.sort((a, b) => a.localeCompare(b));
};

export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
