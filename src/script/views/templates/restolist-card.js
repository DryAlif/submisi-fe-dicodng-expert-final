import CONFIG from '../../globals/config';

const restoListCard = (resto) => `

    <div class="restaurant-list__item">
      <li>
      <figure> 

          <img 
            tabindex="0" 
            class ="image lazyload" 
            data-src=${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId} 
            alt=${resto.name} />


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

</div>
`;

export default restoListCard;
