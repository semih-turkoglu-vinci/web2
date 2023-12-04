/* es-lint disable */

import Navigate from '../Router/Navigate';
import { clearPage, renderPageTitle } from '../../utils/render';

const AddMoviePage = () => {
  clearPage();
  renderGoBackHomeButton();
  renderPageTitle('Add Movie');
  renderAddMovie();
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

function renderAddMovie(){
  const main = document.querySelector('main');
  main.innerHTML+=`
  <div class="addmovie">
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Nom du film</label>
      <input
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">Insérez le titre du film que vous voulez rajouter</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Image</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>    
    <button type="submit" class="btn btn-primary">Ajouter</button>
  </form>
</div>`;

}

export default AddMoviePage;
