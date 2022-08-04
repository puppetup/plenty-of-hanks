const db = require('../config/connection');
const { Movie, User } = require('../models');
//const { User } = require('../models');

const movieSeeds = require('../seeds/hanksMovieData.json');
const userSeeds = require('../seeds/userData.json');

db.once('open', async () => {
  // await Movie.deleteMany({});
  // await User.deleteMany({});
  // await Movie.insertMany(hanksData);
  // await User.insertMany(userData);
  
await Movie.deleteMany({});
await User.deleteMany({});
      const movieIdArr = []
      const users = await User.create(userSeeds);

      for (let i = 0; i < movieSeeds.length; i++) {
        const { _id } = await Movie.create(movieSeeds[i]);
        movieIdArr.push(_id)
      }

      for(let i = 0; i < users.length; i++) {
        for(let j=0; j<5;j++){
          const user = await User.findOneAndUpdate(
            { username: users[i].username },
            {
              $addToSet: {
                movies: movieIdArr[Math.floor(Math.random()*movieIdArr.length)],
              },
            }
          
          );
        }
      }

  console.log('Movies seeded!');
  process.exit(0);
});