import gql from 'graphql-tag';

export default gql`
  {
    properties {
      id
      name
      owner
      imageUrl
      createdAt
      description
      location
      ammount
      hotSale
      category
    }
  }
`;
