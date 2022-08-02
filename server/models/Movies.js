const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    movieName: {
      type: String,
      required: true
    },
    yearReleased: {
      type: number,
      required: true
    },
    imageLink: {
        type: String
      }
  }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
