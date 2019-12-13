import { gql } from 'apollo-server-express';

export default gql`
  type Verify {
    id: ID!
    key: String!
    mobileNumber: String!
  }

  extend type Mutation {
    verifyMessage(mobileNumber: String!): String
  }
`;
