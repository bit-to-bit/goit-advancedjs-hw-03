'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import configuration from './configuration.js';

const displayMessage = message => {
  iziToast.settings(configuration.IZI_TOAST_SETTINGS);
  iziToast.error({ message: message });
};

const showElement = element => {
  element.classList.add('active');
};

const hideElement = element => {
  element.classList.remove('active');
};

export default { displayMessage, showElement, hideElement };
