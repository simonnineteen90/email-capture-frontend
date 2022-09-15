const createMessageArray = (request) => {
  return [
    {
      body: {
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
        email: request.payload.email
      }
    }
  ]
}

module.exports = createMessageArray
