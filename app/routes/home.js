const Joi = require('joi')
const createMessageArray = require('../create-message-array')
const sendToTopic = require('../messaging')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.view('home')
  }
},
{
  method: 'POST',
  path: '/',
  options: {
    validate: {
      payload: Joi.object({
        email: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        console.log(error)
        return h.response('email is required').takeover()
      }
    }
  },
  handler: (request, h) => {
    // create messge array?
    const messageArray = createMessageArray(request)
    sendToTopic(messageArray)
    return `Welcome ${request.payload.firstName} ${request.payload.lastName} You signed up with: ${request.payload.email}`
  }
}]
