/* eslint-disable import/no-cycle */
import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetailNew from '../views/pages/restaurant-detail-new';
import RestaurantLikeNew from '../views/pages/restaurant-like-new';

const routes = {
  '/': RestaurantList, // default page
  '/list': RestaurantList,
  '/detail/:id': RestaurantDetailNew,
  '/like': RestaurantLikeNew,
};

export default routes;
