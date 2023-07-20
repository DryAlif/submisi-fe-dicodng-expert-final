import CONFIG from '../../globals/config';

const restoListCardLike = (resto) => `
  <div class="restaurant-list__item">
    <li>
    <figure> 
      <img 
        tabindex="0" 
        class="image" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" 
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
        <h2 
          aria-label="restoran ${resto.name}" 
          tabindex="0">${resto.name}
        </h2>
      </figcaption>
    </figure>

    <p class="rating" tabindex="0">
        Rating : 
        <span class="rating-value">${resto.rating}</span>
    </p>

    <p class="text-justify">${resto.description.slice(0, 50)}</p>
        
    <a
      aria-label="lihat detail Restoran" 
      tabindex="0" 
      data-id="${resto.id}" 
      href="#/detail/${resto.id}"
      class="resto-btn"> Restaurant Detail
    </a>

    </li> 
</div>
`;

export default restoListCardLike;
