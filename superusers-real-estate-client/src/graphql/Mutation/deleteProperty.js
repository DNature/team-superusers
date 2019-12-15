import gql from 'graphql-tag';

export default gql`
  mutation deleteProperty($id: ID!) {
    deleteProperty(id: $id)
  }
`;
