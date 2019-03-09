const peopleData = require('../../../resources/data/people.json');

const Query = {
  person: (_, {id}) => {
    return peopleData.filter(person => {
      return person.id == id;
    })[0];
  },
  people: (_, {name}) => {
    if (name) {
      return peopleData.filter(person => person.name === name);
    } else {
      return peopleData;
    }
  }
}

module.exports = {
  Query
};
