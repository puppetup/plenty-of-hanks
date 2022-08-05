const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Movie } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // if (context.user) {
      console.log(args) 
      //const userData = await User.find({});
        const userData = await User.findOne({ _id: args.id }).populate('movies');
      console.log(userData);
        return userData;
      // }

     // throw new AuthenticationError('Not logged in');
    },
    
    movies: async (parent, args) => {
     
        const movieData = await Movie.find({});

        return movieData;
      

     // throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
