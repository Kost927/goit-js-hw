import { default as galleryItem } from "./gallery-items.js";
console.table(galleryItem);

const ul = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();

for (let i = 0; i < galleryItem.length; i += 1) {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  const a = document.createElement("a");
  a.classList.add("gallery__link");
  const img = document.createElement("img");
  img.classList.add("gallery__image");

  a.setAttribute("href", galleryItem[i].original);

  img.setAttribute("src", galleryItem[i].preview);
  img.setAttribute("alt", galleryItem[i].description);
  img.setAttribute("data-source", galleryItem[i].original);
  img.setAttribute("width", "350");

  li.appendChild(a);
  fragment.appendChild(li);

  a.appendChild(img);
}

ul.appendChild(fragment);
console.log(ul);

/* ======================================================= */

const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");
const backGround = document.querySelector(".lightbox__overlay");

gallery.addEventListener("click", showBigPicture);

function showBigPicture(e) {
  e.preventDefault();

  const target = e.target;
  console.log("event target:", target);

  if (target.nodeName !== "IMG") {
    return;
  }

  modal.classList.add("is-open");

  const openedImage = event.target;

  const openedLargeImageURL = openedImage.dataset.source;
  const openedLargeImageALT = openedImage.alt;

  modalImage.src = openedLargeImageURL;
  modalImage.alt = openedLargeImageALT;

  modal.addEventListener("click", closeBigPicture);
  document.addEventListener("keydown", closeBigPicture);
  document.addEventListener("keydown", arrowClick);
}

//! ============================

function closeBigPicture(e) {
  if (
    e.target.dataset.action === "close-lightbox" ||
    e.target === backGround ||
    e.key === "Escape"
  ) {
    modal.classList.remove("is-open");

    modal.removeEventListener("click", closeBigPicture);
  }
}

/* ======================================================= */
const arrowClick = (e) => {
  let currentImageSRC = modalImage.getAttribute("src");

  const elemIndex = galleryItem.findIndex(
    (elem) => elem.original === currentImageSRC
  );
  console.log(elemIndex);

  if (e.key === "ArrowRight") {
    let newElemIndex = elemIndex + 1;

    currentImageSRC = modalImage.setAttribute(
      "src",
      galleryItem[newElemIndex].original
    );
    console.log(currentImageSRC);
  }

  if (e.key === "ArrowLeft") {
    let newElemIndex = elemIndex - 1;

    currentImageSRC = modalImage.setAttribute(
      "src",
      galleryItem[newElemIndex].original
    );
    console.log(currentImageSRC);
  }
};
