'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import configuration from './js/configuration.js';
import utils from './js/utils.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { createGalleryCards } from './js/render-functions.js';

const searchFormEl = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const galleryEl = document.querySelector('.gallery');
const gallery = new SimpleLightbox(
  '.gallery a',
  configuration.SIMPLE_LIGHTBOX_SETTINGS
);

const onSearchFormSubmit = event => {
  event.preventDefault();
  galleryEl.innerHTML = '';

  const searchedQuery = event.currentTarget.elements.search_query.value.trim();

  if (!searchedQuery) {
    utils.displayMessage('Please, enter a search phrase!');
    return;
  }

  utils.showElement(loaderEl);

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        utils.displayMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        utils.hideElement(loaderEl);
        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.hits);
      utils.hideElement(loaderEl);
      gallery.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
