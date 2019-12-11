import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID!
    fullName: String!
    username: String!
    mobileNumber: String!
    createdAt: String!
    updatedAt: String
    token: String!
  }

  input RegisterUserInput {
    fullName: String!
    username: String!
    mobileNumber: String!
    password: String!
  }

  extend type Query {
    getUsers: [User]!
    getUserById(id: ID!): User!
  }

  extend type Mutation {
    registerUser(registerUser: RegisterUserInput): User!
    loginUser(username: String!, password: String!): User!
  }
`;
