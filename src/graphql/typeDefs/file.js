import { gql } from "apollo-server-express";

export default gql`
  type File {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    path: String!
  }

  extend type Query {
    getFiles: [File]
    singleFile(fileId: ID!): File!
  }

  extend type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
