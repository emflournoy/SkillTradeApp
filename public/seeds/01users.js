
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(()=> {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Elizabeth', last_name: 'Flournoy', email: 'mcDuffie@gmail.com', phone: 5555555555, state: 'GA', city: 'cocacola', zip: 02959, avatar: 'http://www.poop.com', login: 'poopface', hashed_password:'ilikepoopiedogs'},
        {id: 2, first_name: 'Sol', last_name: 'Laudon', email: 'solsballs@ghotmessmail.com', phone: 5555555555, state: 'NY', city: 'centralperk', zip: 12345, avatar: 'http://www.poop.com', login: 'solsball', hashed_password:'getyourfelafalballs'},
        {id: 3, first_name: 'Jodie', last_name: 'Rigali', email: 'boring@boring.com', phone: 5551112222, state: 'MA', city: 'massholeville', zip: 00102, avatar: 'http://www.poop.com', login: 'boobsmcgee', hashed_password:'59009onacalculator'},
        {id: 4, first_name: 'Jordan', last_name: 'Klaers', email: 'LED@ge.com', phone: 3334445555, state: 'CO', city: 'Nederland', zip: 80333, avatar: 'http://www.poop.com', login: 'king-tut', hashed_password:'breakdanceyourface'},
        {id: 5, first_name: 'Fawkes', last_name: 'Mister', email: 'limitededition@dogs.com', phone: 6667778888, state: 'CO', city: 'rayback', zip: 80384, avatar: 'http://www.poop.com', login: 'fawkesface', hashed_password:'wheresminey'},
        {id: 6, first_name: 'Mak', last_name: 'tastic', email: 'fatdogs@dogs.com', phone: 9990001111, state: 'NM', city: 'Foodville', zip: 53223, avatar: 'http://www.poop.com', login: 'Maklemore', hashed_password:'iliketreats'},
        {id: 7, first_name: 'Bella', last_name: 'Boo', email: 'bterrior@dogs.com', phone: 2223334444, state: 'WV', city: 'BackWoods', zip: 38242, avatar: 'http://www.poop.com', login: 'SmellaBella', hashed_password:'pullmyrope'},
        {id: 8, first_name: 'Mat', last_name: 'Brown', email: 'teach@developer.com', phone: 5556667777, state: 'CA', city: 'Silicon Valley', zip: 99364, avatar: 'http://www.poop.com', login: 'MatMan', hashed_password:'iambatman'},
        {id: 9, first_name: 'Teddi', last_name: 'Maull', email: 'teacher@developer.com', phone: 8889990000, state: 'NH', city: 'The Loft', zip: 42643, avatar: 'http://www.poop.com', login: 'TheCuddler', hashed_password:'illcuddleforcode'},
        {id: 10, first_name: 'Katie', last_name: 'Jenkins', email: 'teachest@developer.com', phone: 1112223333, state: 'NE', city: 'Cornville', zip: 63840, avatar: 'http://www.poop.com', login: 'kind2karma', hashed_password:'the-show-must-go-on'}
      ]);
    })
    .then(function(){
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
  });
};
