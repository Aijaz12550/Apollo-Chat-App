
exports.createUserType = `
 type createUserType {
   message: String
   error: String
 }
`

exports.createUserInput = `
input createUserInput {
  id: ID
  name: String
  email: String
  password: String
}
`

exports.createUserMutation = `
  createUser(input: createUserInput): createUserType
`
