import { getPictures } from './js/pixabay-api.js';
import { picturesTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.input'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const userInput = e.target.elements.query.value;

  if (userInput === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please, enter the query',
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    refs.searchForm.reset();
    return;
  }

  getPictures(userInput)
    .then(data => {
      const markup = picturesTemplate(data.hits);
      console.log(markup);
      refs.gallery.insertAdjacentHTML('beforeend', markup);
    })

    .catch(error => {});
});
