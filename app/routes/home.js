const Joi = require('joi')
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
        email: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        console.log(error)
        return h.response('email is required').takeover()
      }
    }
  },
  handler: (request, h) => {
    console.log('test')
    const emailAddress = request.payload.email
    const emailAddressArray = [{ body: emailAddress }]
    sendToTopic(emailAddressArray)
    return `You signed up with: ${emailAddress}`
  }
}]
