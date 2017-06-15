
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skill_cards').del()
    .then(()=> {
      return knex('skill_cards').insert([
        {id: 1, title: 'cuddeling', description: 'I am an avid cuddler. I will bring techniques to the table that will blow your mind. We\'ll cuddle like never before',  photo: 'http://img.huffingtonpost.com/asset/scalefit_600_noupscale/564224fc14000069023ca5d3.jpeg', user_id: 9, categories_id: 14, environment_id: 5},
        {id: 2, title: 'dancing', description: 'Do people tell you that you have less rythem than a bread stick? Well I\'m here to teach you how to dance like a groovy master',  photo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', user_id: 4, categories_id: 3, environment_id: 3 },
        {id: 3, title: 'LED lighting', description: 'I would love to teach anyone how to create basic electronics centered around using LEDs',  photo: 'https://cdn-learn.adafruit.com/guides/images/000/000/206/medium800/LEDrainbow.jpg?1448301167', user_id: 4, categories_id: 7, environment_id: 4},
        {id: 4, title: 'knots', description: 'Here to help you become the best boy/girl scout ever. I would love to share my knowledge of knots ',  photo: 'http://www.animatedknots.com/imagesindex/typestopperstop1.png', user_id: 1, categories_id: 8, environment_id: 3},
        {id: 5, title: 'Being annoying', description: 'Are you tired of people lingering around too long? I\'m offering the most successfull techniques for being annoying to get rid of those around you',  photo: 'http://i.huffpost.com/gen/1360695/images/o-ANNOYING-COWORKER-facebook.jpg', user_id: 2, categories_id: 4, environment_id: 5},
        {id: 6, title: 'Yogging', description: 'with a hard Y. Join me for some serious yogging',  photo: 'https://squashskills.com/images/sized/1400x660/1063618794-poi824.290-qx100.png', user_id: 3, categories_id: 5, environment_id: 6},
        {id: 7, title: 'Self Hair cutting', description: 'Are you tired of hair stylests always messing up your fresh hairdo? I would love to share personal techniques to make you  a master of grooming yourself',  photo: 'https://www.allskins.co.uk/wp-content/uploads/2015/04/long-hair.jpg', user_id: 5, categories_id: 4, environment_id: 5},
        {id: 8, title: 'eating lots of food', description: 'It really is a talent. I\'ll help you ramp up so you could win a food eating contest',  photo: 'http://s4.thingpic.com/images/Ut/gzvfUSpv9hsxGRnXVZ6fHA1V.jpeg', user_id: 6, categories_id: 11, environment_id: 5},
        {id: 9, title: 'tug-of-war', description: 'Are you tired of not pulling on the rope better than the other team. Join me for lessons on how to win tug-of-war',  photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Irish_600kg_euro_chap_2009.JPG', user_id: 7, categories_id: 5, environment_id: 6},
        {id: 10, title: 'extreme positivity', description: 'Are you tired of being dull and a downer? Join me for opening your mind untill you burst with positivity',  photo: 'https://www.lakehouserecoverycenter.com/wp-content/uploads/2015/05/iStock_000011259011_Large.jpg', user_id: 10, categories_id: 14, environment_id: 5}
      ]);
    })
    .then(function(){
    return knex.raw("SELECT setval('skill_cards_id_seq', (SELECT MAX(id) FROM skill_cards))");
  });
};
