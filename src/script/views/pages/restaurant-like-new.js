import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import FavoriteRestoView from './liked-resto/favorite-resto-view';
import FavoriteRestaurantShowPresenter from './liked-resto/favorite-restaurant-show-presenter';

const view = new FavoriteRestoView();

const RestaurantLike = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, FavoriteRestoIdb });
  },
};

export default RestaurantLike;
