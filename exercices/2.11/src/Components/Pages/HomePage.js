import wolfImage from '../../img/wolf.png';
import batmanImage from '../../img/TheDarkKnight.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `<b>Voici une courte présentation de mes 2 films préférés :</b>
  <br />
  <h3>Le Loup de Wall Street</h3>
  <img style="width:50%"src="${wolfImage}" alt="photo du film le loup de wall street" />
  <br />
  <h6>Synopsis :</h6>
  <b
    >L’argent. Le pouvoir. Les femmes. La drogue. Les tentations étaient là, à portée de main, et
    les autorités n’avaient aucune prise. Aux yeux de Jordan et de sa meute, la modestie était
    devenue complètement inutile. Trop n’était jamais assez…</b
  >
  <br />
  <h3>Batman : The Dark Knight</h3>
  <img style="height:50%"src="${batmanImage}" alt="photo du film batman : The Dark Knight" />
  <br />
  <h6>Synopsis :</h6>
  <br />
  <b
    >Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui
    du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à
    éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais
    elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les
    citoyens de Gotham connaissent sous le nom de Joker.</b
  >`;
};

/* function renderImage(wrapper,url) {
  const image = new Image();
  image.src=url;
  image.height = 100;
  wrapper.appendChild(image);
}
*/

export default HomePage;
