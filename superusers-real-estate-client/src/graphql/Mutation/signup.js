import gql from 'graphql-tag';

export default gql`
  mutation registerUser(
    $displayName: String!
    $email: String!
    $key: String!
    $password: String!
  ) {
    registerUser(
      registerUser: {
        displayName: $displayName
        email: $email
        key: $key
        password: $password
      }
    ) {
      id
      displayName
      email
      mobileNumber
      token
    }
  }
`;
