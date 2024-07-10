const { GraphQLObjectType, GraphQLList } = require("graphql");
const UserType = require("../userTypes/userTypes");
const { pool } = require("../../../../../../config/db");

const UserQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: "Get list of users",
      resolve: async () => {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows;
      },
    },
  }),
});

module.exports = { UserQueryType };

// const UserMutationType = new GraphQLObjectType({
//   name: "Query",
//   description: "Root query",
//   fields: () => ({
//     users: {
//       type: new GraphQLList(UserType),
//       description: "Get list of users",
//       resolve: async () => {
//         const [rows] = await pool.query("SELECT * FROM users");
//         return rows;
//       },
//     },
//   }),
// });
// module.exports = { UserQueryType };
