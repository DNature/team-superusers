import { gql } from 'apollo-server-express';

export default gql`
  type Category {
    id: ID!
    name: String!
    count: Int!
    createdAt: String!
  }

  extend type Query {
    categories: [Category]
  }

  extend type Mutation {
    createCategory(name: String!): Category!
    deleteCategory(id: ID!): String!
  }
`;
