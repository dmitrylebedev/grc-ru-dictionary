import { ajax } from '../../helpers/index';

/**
 * @param word {string}
 * @returns {Promise}
 */
export const getSearchWord = (word) => {
  return ajax
    .get(`/search/?q=${word}`)
    .then(response => response.data)
    .catch(error => console.log('error: ', error));
};
