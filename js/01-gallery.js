import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName === "DIV") {
    return;
  }

  const fullsize = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${fullsize}" />`);
  instance.show();

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
