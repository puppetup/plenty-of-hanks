const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    # firstName: String
    # lastName: String
    email: String
    password: String
    movies: [Movie]
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
    me(id:ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
