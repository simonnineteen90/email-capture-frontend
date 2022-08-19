const Joi = require('joi')

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
        return 'email is required'
      }
    }
  },
  handler: (request, h) => {
    console.log('test')
    const emailAddress = request.payload.email
    return `You signed up with: ${emailAddress}`
  }
}]
