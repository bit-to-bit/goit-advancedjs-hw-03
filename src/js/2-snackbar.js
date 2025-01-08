'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  iziToastSettingsSnackbar,
  COLOR_ERROR,
  COLOR_OK,
  ICO_OK,
  ICO_ERROR,
} from './configuration.js';

iziToast.settings(iziToastSettingsSnackbar);

const promiseForm = document.querySelector('.form');

const makePromise = ({ delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(shouldResolve);
      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

const processPromise = promise => {
  promise
    .then(value =>
      iziToast.success({
        message: `Fulfilled promise in ${value}ms`,
        backgroundColor: COLOR_OK,
        iconUrl: ICO_OK,
      })
    )
    .catch(error =>
      iziToast.error({
        message: `Rejected promise in ${error}ms`,
        backgroundColor: COLOR_ERROR,
        iconUrl: ICO_ERROR,
      })
    );
};

const onPromiseFormSubmit = event => {
  event.preventDefault();
  const promiseDelay = event.target.delay.value;
  const promiseShouldResolve = event.target.state.value === 'fulfilled';
  processPromise(
    makePromise({ delay: promiseDelay, shouldResolve: promiseShouldResolve })
  );
  promiseForm.reset();
};

promiseForm.addEventListener('submit', onPromiseFormSubmit);
