const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolver");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      ///////// This function picks the error thrown by graph ql and can change that
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message;
      const code = err.originalError.code;
      
      return { message: message, status: code, data: data };
    },
  })
);

app.listen(3000, (req, res) => {
  console.log(`PORT IS RUNNING ON PORT ${3000}`);
});
