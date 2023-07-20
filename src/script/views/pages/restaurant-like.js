import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import FavoriteRestoView from './liked-resto/favorite-resto-view';
import restoListCard from '../templates/restolist-card';

const view = new FavoriteRestoView();

const RestaurantLike = {
  async render() {
    return `
        <div id="loading"></div>
        <article class="text_container">
            <h1 id="text-context" tabindex="0" aria-label="Restoran yang di sukai">Liked Restaurant</h1>
        </article>
        <article id="restaurant_like" class="restaurant-like"></article>
    `;
  },

  async afterRender() {
    const DataRestaurants = await FavoriteRestoIdb.getAllRestos();
    const spinner = document.getElementById('loading');
    spinner.remove();
    const LikedContainer = document.getElementById('restaurant_like');
    const restoLikeElement = document.createElement('div');
    restoLikeElement.setAttribute('class', 'restaurant-list__container');

    if (DataRestaurants.length === 0) {
      LikedContainer.classList.add('notFound');
      LikedContainer.innerHTML = `
          <div id="no_favorite">Shows no favorite </div>
          <h1>Restoran yg disukai belum ada. Pilih dengan mengeklik tombol heart button di halaman detail restoran.</h1>
         
          `;
    } else {
      LikedContainer.classList.remove('notFound');
      LikedContainer.innerHTML = '';

      DataRestaurants.forEach((resto) => {
        restoLikeElement.innerHTML += restoListCard(resto);
      });

      LikedContainer.append(restoLikeElement);
    }
  },
};

export default RestaurantLike;
