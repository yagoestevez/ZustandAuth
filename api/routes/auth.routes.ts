import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {
  response.send('Hello Zustand!')
})

export { router }
