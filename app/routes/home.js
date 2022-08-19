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
      failAction: async (request, h, error) => {
        console.log(error)
      }
    }
  },
  handler: (request, h) => {
    console.log('test')
    const emailAddress = request.payload.email
    return `You signed up with: ${emailAddress}`
  }
}]
