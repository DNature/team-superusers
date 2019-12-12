import gql from 'graphql-tag';

export default gql`
  mutation createProperty(
    $name: String!
    $imageUrl: String!
    $description: String!
    $location: String!
    $ammount: String!
    $hotSale: String
    $category: String!
  ) {
    property(
      PropertyInput: {
        name: $name
        imageUrl: $imageUrl
        description: $description
        location: $location
        ammount: $ammount
        hotSale: $hotSale
        category: $category
      }
    ) {
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
