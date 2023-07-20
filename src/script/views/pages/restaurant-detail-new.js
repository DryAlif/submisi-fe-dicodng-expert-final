/* eslint-disable import/no-cycle */
import UrlParser from '../../routes/url-parser';
import restoDbSource from '../../data/restodb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriterestoIdb from '../../data/favoriteresto-idb';
import { createRestaurantLayoutDetailTemplate } from '../templates/layout';

const RestaurantDetailNew = {
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
    const dataResto = await restoDbSource.getRestaurantDetail(url.id);
    const dataRestaurantDetail = dataResto.restaurant;
    const spinner = document.getElementById('loading');
    const detailContainer = document.getElementById('restaurant_detail');
    detailContainer.innerHTML =
      createRestaurantLayoutDetailTemplate(dataRestaurantDetail);

    // await awaitTimeout(100);
    spinner.remove();

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      FavoriterestoIdb,
      dataRestaurantDetail,
    });
  },
};

export default RestaurantDetailNew;
