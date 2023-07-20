import favoriterestoIdb from '../../../data/favoriteresto-idb';

class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurantDb = favoriterestoIdb }) {
    this._view = view;
    this._favoriteRestaurantDb = favoriteRestaurantDb;

    this._showFavoriteRestaurant();
  }

  async _showFavoriteRestaurant() {
    const restaurantDatas = await this._favoriteRestaurantDb.getAllRestos();
    this._displayRestos(restaurantDatas);
  }

  _displayRestos(restaurant) {
    console.log('_displayRestos(restaurant)', restaurant);
    this._view.showFavoriteRestaurant(restaurant);
  }
}

export default FavoriteRestaurantShowPresenter;
