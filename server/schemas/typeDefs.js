const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String
    password: String
    movies: [Movie]
  }
  type Movie {
    movieName: String
    yearReleased: Int
    imageLink: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    movie: Movie
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
