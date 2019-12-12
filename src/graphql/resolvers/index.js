import usersResolvers from './users';
import filesResolvers from './file';
import propertyResolvers from './property';
import categoryResolvers from './category';

// exports both Queries and mutations
export default {
  Query: {
    ...usersResolvers.Query,
    ...filesResolvers.Query,
    ...propertyResolvers.Query,
    ...categoryResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...filesResolvers.Mutation,
    ...categoryResolvers.Mutation,
    ...propertyResolvers.Mutation
  }
};
