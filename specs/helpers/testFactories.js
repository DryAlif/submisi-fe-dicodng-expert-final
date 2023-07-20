import likeButtonInitiator from '../../src/script/utils/like-button-initiator';
import favoriterestoIdb from '../../src/script/data/favoriteresto-idb';

const createLikeButtonPresenterWithRestaurant = async (
  dataRestaurantDetail
) => {
  await likeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriterestoIdb,
    dataRestaurantDetail,
  });
};

export { createLikeButtonPresenterWithRestaurant };
