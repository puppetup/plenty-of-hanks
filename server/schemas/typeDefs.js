const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    # firstName: String
    # lastName: String
    email: String
    password: String
    movies: [String]
  }
  type Movie {
    _id: ID!
    movieName: String
    yearReleased: Int
    imageLink: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    movies: [Movie]
    users: [User]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(movie_id: String): User
  }
`;

module.exports = typeDefs;
