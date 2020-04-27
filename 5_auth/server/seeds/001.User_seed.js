
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del() 
    .then(() => {
      return knex('users').del()
    })
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'admin', first_name: 'A', password: '$2b$10$gVku3DvYH3EbklkoJ/HuouzAVxM/K4GgKLKQokX0YxLb6xsevKfcC'},
        { username: 'poweruser', first_name: 'B', password: '$2b$10$gVku3DvYH3EbklkoJ/HuouzAVxM/K4GgKLKQokX0YxLb6xsevKfcC'}
      ]);
    }).then((userId) => {
      return knex('addresses').insert([
        {user_id: userId[0], address_1: "Something street 12"}
      ])
    });
};
