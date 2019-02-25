var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    data: String
  }
`);

var root = { data: () => 'Hello world!' };

graphql(schema, '{ data }', root).then((response) => {
  console.log(response);
});