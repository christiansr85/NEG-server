const { buildSchema } = require('graphql');

// GraphQL schema
const schema = buildSchema(`
type Query {
    person(id: Int!): Person
    people(name: String): [Person]
},
type Person {
    id: Int
    name: String
    age: Int
}
`);

module.exports = schema;