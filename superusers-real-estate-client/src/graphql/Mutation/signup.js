import gql from 'graphql-tag';

export default gql`
  mutation registerUser(
    $displayName: String!
    $email: String!
    $mobileNumber: String!
    $password: String!
  ) {
    registerUser(
      registerUser: {
        displayName: $displayName
        email: $email
        mobileNumber: $mobileNumber
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
