import gql from 'graphql-tag';

export default gql`
  mutation verifyMessage($mobileNumber: String!) {
    verifyMessage(mobileNumber: $mobileNumber)
  }
`;
