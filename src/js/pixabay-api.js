'use strict';
import { API_ENDPOINT, API_KEY } from './configuration.js';
export const fetchPhotosByQuery = searchedQuery => {
  return fetch(
    `${API_ENDPOINT}?key=${API_KEY}&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
