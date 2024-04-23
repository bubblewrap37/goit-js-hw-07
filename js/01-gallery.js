import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const fullsize = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${fullsize}" />`);
  instance.show();
});
