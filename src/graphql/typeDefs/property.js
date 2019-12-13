import { gql } from 'apollo-server-express';

export default gql`
  type Property {
    id: ID!
    name: String!
    owner: String!
    imageUrl: String!
    createdAt: String!
    description: String!
    location: String!
    ammount: String!
    hotSale: String!
    category: String!
    otherImages: [Image]
    tags: [Tags]
  }

  type Image {
    id: ID!
    url: String!
  }

  type Tags {
    id: ID!
    tag: String!
  }

  input PropertyInput {
    name: String!
    imageUrl: String!
    description: String
    location: String!
    ammount: String!
    hotSale: String
    category: String!
    otherImages: [ImageInput]
    tags: [TagInput]
  }

  input ImageInput {
    url: String
  }

  input TagInput {
    tag: String
  }

  extend type Query {
    properties: [Property]
    property(proprtyId: ID!): Property!
  }

  extend type Mutation {
    createProperty(property: PropertyInput): Property!
    deleteProperty(id: ID!): String
  }
`;
