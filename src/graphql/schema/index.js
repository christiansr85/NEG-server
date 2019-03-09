const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArray = fileLoader(path.join(__dirname, './types'));
const schema = mergeTypes(typesArray, { all: true });

module.exports = schema;
