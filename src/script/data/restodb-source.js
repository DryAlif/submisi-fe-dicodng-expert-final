// import CONFIG from '../globalS/config';
import API_ENDPOINT from '../globals/api-endpoint';

class restoDbSource {
  static async getRestaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJsonDetail = await response.json();
    return responseJsonDetail;
  }
}

export default restoDbSource;
