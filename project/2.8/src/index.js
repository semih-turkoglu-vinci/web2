/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import skinCare from './img/pexels-john-tekeridis-3212164.jpg';

renderImageFromString();

function renderImageFromString() {

    const leftSideAsString = getLeftSideAsString();

    const main = document.querySelector('main');

    main.innerHTML += leftSideAsString;
}

function getLeftSideAsString() {
    const leftSide = getAllLeftSide();
    return leftSide;
}

function getAllLeftSide() {
    const leftSide = `
    <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid" src="${skinCare}" />
          </div>
          <div class="col-md-6">
            <div class="text-center">
               Test
            </div>
          </div>
        </div>
      </div>
      `;
      return leftSide;
}
