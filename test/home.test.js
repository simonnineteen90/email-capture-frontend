describe('Home test', () => {
  const createServer = require('../app/server')
  let server

  beforeEach(async () => {
    server = await createServer()
  })

  test('GET /healthz route returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }
    const response = await server.inject(options)
    expect(response.statusCode).toBe(200)
  })

  afterEach(async () => {
    await server.stop()
  })
})
