'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { iziToastSettings } from './configuration.js';
import { fetchPhotosByQuery } from './pixabay-api.js';
import { createGalleryCard } from './render-functions.js';

iziToast.settings(iziToastSettings);

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.search_query.value.trim();

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      console.dir(data.hits);
      if (data.hits.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        galleryEl.innerHTML = '';

        return;
      }

      galleryEl.innerHTML = createGalleryCard(data.hits);
    })
    .catch(err => {
      console.log(err);
    });
};

searchForm.addEventListener('submit', onSearchFormSubmit);
