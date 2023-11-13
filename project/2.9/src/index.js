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

const btn1 = document.querySelector(".event");

btn1.addEventListener('click', () => {
  const main = document.querySelector('main');
  const about = `
  <div class="container mt-4">
  <h1>About Us</h1>
  <p>
    Welcome to our website! We are a team of passionate individuals dedicated to providing
    high-quality content and services. Our mission is to make a positive impact in the online world.
  </p>
  <p>
    Feel free to explore our website and learn more about what we do. If you have any questions,
    don't hesitate to contact us.
  </p>
  <button class="btn btn-primary back" type="button">Back</button>
</div>
    `;
  main.innerHTML = about;
  const btn2 = document.querySelector(".back");
  btn2.addEventListener('click', () => {
    const homepage = `
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
      main.innerHTML=homepage;
  });
});

