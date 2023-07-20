import API_ENDPOINT from '../../globals/api-endpoint';
import CONFIG from '../../globals/config';

const createRestaurantItemLayoutTemplate = (resto) =>
  `<div class="restaurant-list__item">
      <li>
      <figure> 
        <img 
          tabindex="0" 
          class="image lazyload" src="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" 
          alt="Restoran ${resto.name} " 
        />
        <div class="restaurant-list__city-name">
          <h1 
            tabindex="0" 
            aria-label="Lokasi ada di Kota ${resto.city}">
            ${resto.city}
          </h1>
        </div>
  
        <figcaption>
          <p tabindex="0">
          Rating : 
          <span class="rating-value">⭐️${resto.rating}</span>
          </p>
        </figcaption>
      </figure>
  
  
      <div class="resto-title" aria-label="Restoran ${resto.name}">
        <a role="link"
        aria-label="Buka Halaman Detail Restoran ${resto.name}"
        href="#/detail/${resto.id}">${resto.name}</a>
      </div>
  
      <p class="text-justify">${resto.description.slice(0, 150)}</p>
      
      </li> 
  </div>`;

const createRestaurantLayoutDetailTemplate = (resto) => `
<div class="restaurant">
 
 <img 
  class="restaurant__poster lazyload" 
  tabID="${resto.pictureId}"
  src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" 
  alt="Restoran ${resto.name}" tabindex="0" />

  
  <div class="restaurant__title">
    <h1 class="restaurant__title_text">${resto.name}</h1>
  </div>
  <div class="restaurant__info">
    <div class="restaurant__info__desc">
      <h2>Description</h2>
      <hr />
      <p tabindex="0" aria-label="deskripsi restoran">${resto.description}</p>
    </div>
  
    <div class="restaurant__info__address">
      <h2 tabindex="0" aria-label="Nama kota dan nama jalan">Kota & Address</h2>
      <hr />
      <p tabindex="0" aria-label="Lokasi Kota di ${
        resto.city
      } yang berada di jalan ${resto.address}">Kota ${resto.city} - ${
  resto.address
}</p>
    </div>
       
    <div class="restaurant__rating">
    <h2 tabindex="0" aria-label="Rating">Rating :</h2>  
  
      <h3 tabindex="0" aria-label="Rating Restoran ${
        resto.rating
      }" ><p>⭐️<span class="restaurant__rating__score">
      ${resto.rating}</span></p></h3>
    </div>
    <hr />

    <div class="restaurant__info__categories">
    <h2 tabindex="0" aria-label="Kategori" >Categories :</h2>
    <p>
    ${resto.categories
      .map(
        (category) =>
          `<span tabindex="0" aria-label="Kategori ${category.name}" class="restaurant__category"> ${category.name} </span>`
      )
      .join('')}
    
    </p>
  </div>
  
  </div>

  <div class="restaurant__food-overview">
      <h2 tabindex="0" aria-label="Daftar Makanan" >Foods</h2>
      <hr />
      <div class="food-drink-list-container">
      <ol type="1">
      ${resto.menus.foods
        .map((food) => ` <li><p tabindex="0" >${food.name}</p></li> `)
        .join('')}
      </ol>
      </div>
      <h2 tabindex="0" aria-label="Daftar Minuman" >Drink</h2>
      <hr />
      <div class="food-drink-list-container">
      <ol type="1">
      ${resto.menus.drinks
        .map((drink) => ` <li><p tabindex="0" >${drink.name}</p></li> `)
        .join('')}
      </ol>
      </div>
    </div>

    <div class="restaurant__reviews">
    <h2 tabindex="0" aria-label="Review Pelanggan Restoran ${
      resto.name
    }">Review</h2>
    <hr />

    
    ${resto.customerReviews
      .map(
        (review) => `
          <div tabindex="0" aria-label="Review Pelanggan"  class="restaurant__reviews__card">
            <div class="restaurant__reviews__reviewInfo">
              <p class="restaurant__reviews__name">${review.name}</p> 
              <p class="restaurant__review__date">${review.date}</p>
            </div>
           
            <div class="restaurant__reviews__body">
              ${review.review.slice(0, 60)}
            </div>
          </div>
        `
      )
      .join('')}
    </div>
  </div>
`;

export {
  createRestaurantItemLayoutTemplate,
  createRestaurantLayoutDetailTemplate,
};
