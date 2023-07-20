/* eslint-disable import/no-cycle */
import UrlParser from '../../routes/url-parser';
import restoDbSource from '../../data/restodb-source';
import { createRestaurantLayoutDetailTemplate } from '../templates/layout';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriterestoIdb from '../../data/favoriteresto-idb';

const RestaurantDetail = {
  async render() {
    return `
        <div id="loading"></div>
        <article class="text_container">
               <h1 id="text-context" tabindex="0" aria-label="Detail Restoran">Detail Restaurant</h1>
          </article>
        <div id="likeButtonContainer"></div>
        <article id="restaurant_detail"></article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await restoDbSource.getRestaurantDetail(url.id);
    const { restaurant } = items;
    const spinner = document.getElementById('loading');

    const detailContainer = document.getElementById('restaurant_detail');

    try {

      spinner.remove();

      detailContainer.innerHTML =
        createRestaurantLayoutDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.getElementById('likeButtonContainer'),
        FavoriterestoIdb,
        dataRestaurantDetail,
      });
    } catch (err) {
      console.error(err);
      spinner.remove();
      detailContainer.classList.add('notFound');
      detailContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default RestaurantDetail;
