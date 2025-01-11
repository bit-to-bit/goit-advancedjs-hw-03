'use strict';

const show = loaderElement => {
  loaderElement.classList.add('active');
};

const hide = loaderElement => {
  loaderElement.classList.remove('active');
};

export default { show, hide };
