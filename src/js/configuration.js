import icoError from '../img/error.svg';
import icoOk from '../img/ok.svg';

/* Pixabay API */
export const API_KEY = '48136593-1bf82471b28fd261a3cd32e51';
export const API_ENDPOINT = 'https://pixabay.com/api/';

/* iziToast */
const COLOR_ERROR = ' #ef4040';
const COLOR_OK = ' #59A10D';
const ICO_ERROR = icoError;
const ICO_OK = icoOk;

export const IZI_TOAST_SETTINGS = {
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

/* SimpleLightbox */

export const SIMPLE_LIGHTBOX_SETTINGS = {
  captionsData: 'alt',
  captionDelay: 250,
};

export default {
  IZI_TOAST_SETTINGS,
  SIMPLE_LIGHTBOX_SETTINGS,
};
