
exports.seed = function(knex, Promise) {

  return knex('user').del()
    .then(function () {

      return knex('user').insert([
        {name: 'Serranos', email: 'serranos@gmail.com', phone: '602-345-6678', password: 'test10', user_type: 'donor', avatar_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCB4Tto4sf-AOj2rRuMnIXmV9FRmIHbL0fzlVo-UPc34bSdl6MA'},
        {name: 'Protien House', email: 'protienhouse@gmail.com', phone: '602-333-2903', password: 'test20', user_type: 'donor', avatar_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tzGjaw-Yd9VgD-cWqCq4CY9DEWAxb5NiYyKvFXkdw-biNC0T'},
        {name: 'St. Marys Food Bank', email: 'stmarys@gmail.com', phone: '602-567-9901', password: 'test30', user_type: 'charity', avatar_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwlUXcshmhQjIuTTiVGBe01SsmUnyiWT7WNaYBsYvkQViJNJBhw'},
        {name: 'Desert Mision Food Bank', email: 'desertmission@gmail.com', phone: '602-666-3211', password: 'test40', user_type: 'charity', avatar_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-GSIyzjwWiDxrc-hinM4Kwztu1lPwgBYv3lGk44Jo6Y1-Dh0CQ'}
      ]);
    });
};
