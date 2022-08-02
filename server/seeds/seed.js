const db = require('../config/connection');
const { Tech } = require('../models');

const hanksData = require('../seeds/hanksMovieData.json');
const userData = require('../seeds/userData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(hanksData, userData);

  console.log('Technologies seeded!');
  process.exit(0);
});
