const { gql } = require('apollo-server')
const { createUserType, createUserInput, createUserMutation} = require('./mutations')
const { getusersType, getUsersQuery } = require('./queries')

const typeDef = gql `
${createUserType}
${createUserInput}
${getusersType}

type Mutation {
  ${createUserMutation}
}
type Query {
  ${getUsersQuery}
}
`

module.exports = typeDef
