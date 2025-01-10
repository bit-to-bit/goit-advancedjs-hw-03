import icoError from '../img/error.svg';
import icoOk from '../img/ok.svg';

/* Pixabay API */
export const API_KEY = '48136593-1bf82471b28fd261a3cd32e51';
export const API_ENDPOINT = 'https://pixabay.com/api/';

/* iziToast */
export const COLOR_ERROR = ' #ef4040';
export const COLOR_OK = ' #59A10D';
export const ICO_ERROR = icoError;
export const ICO_OK = icoOk;

export const iziToastSettings = {
  timeout: 4000,
  backgroundColor: COLOR_ERROR,
  messageSize: '16',
  messageColor: 'white',
  messageLineHeight: '64',
  iconUrl: ICO_ERROR,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
};

export const iziToastSettingsSnackbar = {
  timeout: 3000,
  messageSize: '16',
  messageColor: 'white',
  messageLineHeight: '64',
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
};
