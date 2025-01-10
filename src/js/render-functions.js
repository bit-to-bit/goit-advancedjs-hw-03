export const createGalleryCard = imgArr => {
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
                <div class="likes">Likes<span>1813</span></div>
                <div class="views">Views<span>900290</span></div>
                <div class="comments">Comments<span>229</span></div>
                <div class="downloads">Downloads<span>610937</span></div>
      </div>
           </a>

      </li>`
    );
  }, '');
};
