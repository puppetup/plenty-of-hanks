const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String
    password: String
    savedBooks: [Book]
    Movie1: Movies
    Movie2: Movies
    Movie3: Movies
    Movie4: Movies
    Movie5: Movies
  }
  type Movie {
    movieName: String
    yearReleased: number
    imageLink: String
  }
  type Query {
    user: User
  }
  type Query {
    movie: Movie
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
