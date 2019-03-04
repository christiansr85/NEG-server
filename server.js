const express = require('express');
const express_graphql = require('express-graphql');
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

const peopleData = [
    {
        id: 1,
        name: 'John',
        age: 24
    },
    {
        id: 2,
        name: 'Ana',
        age: 27
    },
    {
        id: 3,
        name: 'Mary',
        age: 33
    },
    {
        id: 4,
        name: 'Rose',
        age: 22
    },
    {
        id: 5,
        name: 'Cris',
        age: 34
    }
];

const getPerson = function(args) {
    var id = args.id;
    return peopleData.filter(person => {
        return person.id == id;
    })[0];
}

const getPeople = function(args) {
    if (args.topic) {
        var name = args.name;
        return peopleData.filter(person => person.name === name);
    } else {
        return peopleData;
    }
}

// Root resolver
const root = {
    person: getPerson,
    people: getPeople
};

const PORT = process.env.PORT || 4000;
// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${PORT}/graphql`));