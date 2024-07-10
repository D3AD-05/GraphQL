const { GraphQLSchema } = require("graphql");
const {
  UserQueryType,
  UserMutationType,
} = require("./userModels/userQueryType"); // Ensure the path is correct

const userSchema = new GraphQLSchema({
  query: UserQueryType,
  // mutation: UserMutationType,
});

module.exports = userSchema;
