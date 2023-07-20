import FavoriteRestoIdb from '../data/favoriteresto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/like-button';

const isObjectEmpty = (objectName) => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};

const LikeButtonInitiator = {
  async init({ likeButtonContainer, favoriteResto = FavoriteRestoIdb, dataRestaurantDetail }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteResto = favoriteResto;
    this._restaurantDetail = dataRestaurantDetail;
    await this._renderButton();
  },



  async _renderButton() {
    const { id } = this._restaurantDetail;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();

    } else {
      this._renderLike();
    }


  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteResto.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restaurantDetail);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restaurantDetail.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
