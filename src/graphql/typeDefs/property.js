import { gql } from 'apollo-server-express';

export default gql`
  type Property {
    id: ID!
    name: String!
    owner: String
    createdAt: String!
    description: String!
    location: String!
    ammount: String!
    hotSale: Boolean!
    category: String!
    tags: [Tags]
  }

  type Tags {
    id: ID!
    tag: String!
  }

  extend type Query {
    properties: [Property]
    property(proprtyId: ID!) Property!
  }

  extend type Mutation {
    createProperty(name: String!, count: Int!): Property
  }
`;
