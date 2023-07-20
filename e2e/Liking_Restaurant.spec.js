const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/like');
});

Scenario('showing empty liked Restaurant', ({ I }) => {
  I.waitForElement('#no_favorite', 3);
  I.seeElement('#no_favorite');
  I.see('Shows no favorite', '#no_favorite');
});

Scenario('liking one Restaurant', async ({ I }) => {
  I.waitForElement('#no_favorite', 1); // assist
  // I.waitForElement('#no_favorite', 3); // assist

  I.seeElement('#no_favorite'); // assist
  I.see('Shows no favorite', '#no_favorite');
  I.amOnPage('/');

  I.waitForElement('.restaurant-list__item', 3); //
  I.waitForElement('.restaurant-list__item', 1);

  I.seeElement('.restaurant-list__item');

  const sampleRestaurant = locate('.restaurant-list__item a').first();
  const sampleRestaurantTitle = await I.grabTextFrom(sampleRestaurant);

  // I.waitForClickable(sampleRestaurant, 3);
  I.waitForClickable(sampleRestaurant, 1);
  I.click(sampleRestaurant);

  // on detaill page click likeButton
  // I.waitForElement('#likeButton', 2);
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  // I.waitForClickable('#likeButton', 1);

  I.amOnPage('#/like');

  I.waitForElement('.restaurant-list__item', 1);
  I.seeElement('.restaurant-list__item');

  const likedRestaurant = locate('.restaurant-list__item a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);
  assert.strictEqual(sampleRestaurantTitle, likedRestaurantTitle);
});
