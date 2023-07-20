const assert = require('assert');

Feature('UnLiking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-list__item');
});

Scenario('UnLiking Restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-list__item', 1);
  I.seeElement('.restaurant-list__item');

  const sampleRestaurant = locate('.restaurant-list__item a').first();
  const sampleRestaurantTitle = await I.grabTextFrom(sampleRestaurant);

  // click title button
  I.waitForClickable(sampleRestaurant, 1);
  I.click(sampleRestaurant);

  // on detaill page click likeButton
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // move to like page
  I.amOnPage('/#/like');

  I.waitForElement('.restaurant-list__item', 1);
  I.seeElement('.restaurant-list__item');

  const likedRestaurant = locate('.restaurant-list__item a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(sampleRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurant);

  // on detaill page click likeButton
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('#no_favorite', 1);
  I.seeElement('#no_favorite');
  I.see('Shows no favorite', '#no_favorite');
});
