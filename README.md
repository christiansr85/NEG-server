# NEG-server

The goal of this repo is just to provide a very simple server built with Express.js and GraphQL in order to serve a query example. This can be consumed by any app which implements a graphQL client.

# Usage

You just have to clone this repository and execute the typical commands:

    npm install

and
    
    npm start

to start the server.

If you want to modify anything, you can excute instead

    npm run dev

in order to keep the server listening while you write your code.

# Schemas

If you are going to use this server, you should know the schema it offers.

## Entities

I've just created a single entity, enough to test a graphql client:

```
type Person {
    id: Int
    name: String
    age: Int
}
```

And also, the query definition to ask for people. Here I've added two queries: one to get a person from its `id` and another one which gets the complete list of people and lets you also to filter by exact `name` property.

```
type Query {
    person(id: Int!): Person
    people(name: String): [Person]
}
```