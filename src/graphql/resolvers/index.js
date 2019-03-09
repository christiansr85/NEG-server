const peopleData = require('../../../resources/data/people.json');

const getPerson = function(args) {
  var id = args.id;
  return peopleData.filter(person => {
    return person.id == id;
  })[0];
};

const getPeople = function(args) {
  if (args.topic) {
    var name = args.name;
    return peopleData.filter(person => person.name === name);
  } else {
    return peopleData;
  }
};

module.exports = {
  getPerson,
  getPeople
};
