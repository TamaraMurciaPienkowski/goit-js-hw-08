// Opisany w dokumentacji
import SimpleLightbox from '../../node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryPic = galleryItems
  .map(
    galleryItem => `<li><a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryPic);
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

console.log(galleryItems);
