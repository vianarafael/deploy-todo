const express = require("express");
const path = require("path");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const knex = require("./db/knex");

const app = express();
const schema = buildSchema(`
type Todo {
  todo: String
}

type Query {
  getTodos: [Todo],
    hello: String
}
`);

const root = {
  hello: () => {
    return "What is up, madafaka?!";
  },
  getTodos: () => {
    return knex.raw("select * from todos").then(todos => {
      return todos.rows;
    });
    // });
  }
};

app.use(express.static(path.join(__dirname + "/dist")));

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
const port = process.env.PORT || 4001;

app.listen(port, function() {
  console.log(`🚀 running on ${port} 🚀`);
});
