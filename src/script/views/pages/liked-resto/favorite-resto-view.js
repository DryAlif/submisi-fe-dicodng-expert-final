import { createRestaurantItemLayoutTemplate } from '../../templates/layout';

class FavoriteRestoView {
  getTemplate() {
    return `
        <div id="loading"></div>
        <article class="text_container">
            <h1 id="text-context" tabindex="0" aria-label="Restoran yang di sukai">Liked Restaurant</h1>
        </article>
         <div id="card" class="cards"></div>
        <article id="restaurant_like" class="restaurant-like"></article>
        `;
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;

    const spinner = document.getElementById('loading');
    spinner.remove();

    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantItemLayoutTemplate(restaurant)),
        ''
      );
    } else {
      // document.getElementById('restaurant_like').style.display = 'block';
      html = this._getEmptyRetaurantTemplate();
    }

    document.getElementById('restaurant_like').innerHTML = html;
    document
      .getElementById('restaurant_like')
      .dispatchEvent(new Event('restaurant_like:updated'));
  }

  _getEmptyRetaurantTemplate() {
    return `
      <div id="no_favorite">Shows no favorite</div>
    `;
  }
}

export default FavoriteRestoView;
