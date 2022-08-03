const db = require('../config/connection');
const { Movie } = require('../models');
// const { User } = require('../models');

const hanksData = require('../seeds/hanksMovieData.json');
const userData = require('../seeds/userData.json');

db.once('open', async () => {
  await Movie.deleteMany({});
 // await User.deleteMany({});
  await Movie.insertMany(hanksData);
  // await User.insertMany(userData);

  console.log('Movies seeded!');
  process.exit(0);
});
