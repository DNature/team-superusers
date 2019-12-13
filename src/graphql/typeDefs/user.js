import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    displayName: String!
    email: String!
    mobileNumber: String!
    createdAt: String!
    token: String!
  }

  input RegisterUserInput {
    displayName: String!
    email: String!
    password: String!
    key: String!
  }

  extend type Query {
    getUsers: [User]!
    getUserById(id: ID!): User!
  }

  extend type Mutation {
    registerUser(registerUser: RegisterUserInput): User!
    loginUser(email: String!, password: String!): User!
  }
`;
