import usersResolvers from './users';
import filesResolvers from './file';

// exports both Queries and mutations
export default {
  Query: {
    ...usersResolvers.Query,
    ...filesResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...filesResolvers.Mutation
  }
};
