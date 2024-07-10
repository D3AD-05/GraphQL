const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const userSchema = require("./Users/userSchema/schemas");

router.use(
  "/users",
  graphqlHTTP({
    schema: userSchema,
    graphiql: true,
  })
);

module.exports = router;
