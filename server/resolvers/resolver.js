const { createUserResolver } = require('./mutations')
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolver = {
  Mutation:{
    createUser: createUserResolver
  },
  Query:{
    getUsers: () => {
      return "chala"
    }
  },
  getUsersType:{
    name: ()=>{
      return "nested"
    }
  }
}

module.exports = resolver
