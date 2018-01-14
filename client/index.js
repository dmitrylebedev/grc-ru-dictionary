import { convertCharToggle, ready } from './helpers';
import * as api from './api/search';
import dompurify from 'dompurify';
import './index.css';

ready(function () {
  const input = document.querySelector('#js-input-text');
  const results = document.querySelector('#js-results');
  const inputField = input.querySelector('.input-txt__field');
  const inputClear = input.querySelector('.input-txt__clear');
  const inputInner = input.querySelector('.input-txt__inner');

  if (inputField !== null) {
    inputField.addEventListener('keypress', event => convertCharToggle(event));
    inputField.addEventListener('keyup', event => searchWorld(event));
    inputClear.addEventListener('click', event => clearText(event));
  }

  function searchWorld(event) {
    let value = event.target.value;

    if (value === ''){
      inputInner.classList.remove('input-txt__inner_filled');

      history.pushState(null, null, `/`)

      results.innerHTML = '';

    } else {
      inputInner.classList.add('input-txt__inner_filled')

      api.getSearchWord(value).then(res => {
        history.pushState(null, null, `/search/?q=${value}`)
        if (res.length){
          results.innerHTML = dompurify.sanitize(searchResultsHTML(res, value));
        } else {
          results.innerHTML = value;
        }
      })
    }
  }

  window.onpopstate = function(event) {
    console.log('popstate') /*eslint-enable-line */
    window.location = document.location
  };

  function clearText(event) {
    event.preventDefault();

    inputField.value = '';
    results.innerHTML = '';

    inputField.focus();

    if (inputInner.classList.contains('input-txt__inner_filled')) {
      inputInner.classList.remove('input-txt__inner_filled')
    }
  }

  //TODO: написать парсер для сокращённых слов / ссылок
  //Разбить на простые функции
  //Написать тесты
  function searchResultsHTML(words, value) {
    console.log('words', words) /*eslint-enable-line */

    if (words.length > 1) {
      return `<h1>${value}</h1>${words.map((word, index) => {
        return `<p>${index+1} ${word.translate}</p>`;
      }).join('')}`;
    } else {
      return `<h1>${value}</h1>${words.map(word => `<p>${word.translate}</p>`).join('')}`;
    }
  }

  const XHR_TIMEOUT = 100000;

  const ajax = (config, onSuccess, onError) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = onSuccess;
    xhr.onerror = onError;

    let timeout = setTimeout(() => {
      xhr.abort();
      onError();
    }, XHR_TIMEOUT);

    xhr.open(config.method, config.url, true);

    xhr.send();
  }

  ajax({method: 'GET', url: "https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&v=5.69"}, onSuccess, onError)

  function onSuccess(evt) {
    console.log('success', JSON.parse(evt.target.response)) /*eslint-enable-line */
  }

  function onError(data) {
    console.log('error', data) /*eslint-enable-line */
  }

});
