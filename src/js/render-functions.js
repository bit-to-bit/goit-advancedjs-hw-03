export const createGalleryCards = imgArr => {
  return imgArr.reduce((acc, el) => {
    return (
      acc +
      `<li class="gallery-item">
      <a class="gallery-link" href="${el.largeImageURL}">
      <img class="gallery-image"
           src="${el.webformatURL}"
           data-source="${el.largeImageURL}"
           alt="${el.tags}"/>
      <div class="details">
                <div class="likes">Likes<span>${el.likes}</span></div>
                <div class="views">Views<span>${el.views}</span></div>
                <div class="comments">Comments<span>${el.comments}</span></div>
                <div class="downloads">Downloads<span>${el.downloads}</span></div>
      </div>
           </a>

      </li>`
    );
  }, '');
};
