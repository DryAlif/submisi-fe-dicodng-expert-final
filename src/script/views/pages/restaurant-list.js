import restoDbSource from '../../data/restodb-source';
import restoListCard from '../templates/restolist-card';

const RestaurantList = {
  async render() {
    return `
    
          <div id="loading"></div>
          <article class="text_container">
               <h1 id="text-context" tabindex="0" aria-label="Explore Restaurant">Explore Restaurant</h1>
          </article>
          <article id="restaurant_list" class="restaurant-list">  </article>
    `;
  },

  async afterRender() {
    const spinner = document.querySelector('#loading');

    const listContainer = document.getElementById('restaurant_list');
    listContainer.innerHTML = '';
    listContainer.classList.remove('notFound');

    const restaurantElement = document.createElement('div');
    restaurantElement.setAttribute('class', 'restaurant-list__container');

    try {
      const DataRestaurants = await restoDbSource.getRestaurantList(); // fetch restaurant list
      DataRestaurants.restaurants.forEach((restaurant) => {
        restaurantElement.innerHTML += restoListCard(restaurant);
      });

      listContainer.append(restaurantElement);
      spinner.classList.add('display-hide');
      spinner.remove();
    } catch (err) {
      console.error(err);
      spinner.remove();
      listContainer.classList.add('notFound');
      listContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default RestaurantList;
