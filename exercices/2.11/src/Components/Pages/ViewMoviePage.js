import Navigate from '../Router/Navigate';
import { clearPage,renderPageTitle } from '../../utils/render';

const ViewMoviePage = () => {
  clearPage();
  renderGoBackHomeButton();
  renderPageTitle('View Page');
  renderViewMovie();
};

function renderGoBackHomeButton() {
  const main = document.querySelector('main');
  const submit = document.createElement('input');
  submit.value = 'Go back to HomePage';
  submit.className = 'btn btn-secondary mt-3';
  submit.addEventListener('click', () => {
    Navigate('/');
  });

  main.appendChild(submit);
};

function renderViewMovie(){
  const main = document.querySelector('main');
  main.innerHTML+=``;
}

export default ViewMoviePage;
