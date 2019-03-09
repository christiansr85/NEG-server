const peopleData = require('../../../resources/data/people.json');

const person = function(args) {
  var id = args.id;
  return peopleData.filter(person => {
    return person.id == id;
  })[0];
};

const people = function(args) {
  if (args.name) {
    var name = args.name;
    return peopleData.filter(person => person.name === name);
  } else {
    return peopleData;
  }
};

module.exports = {
  person,
  people
};
