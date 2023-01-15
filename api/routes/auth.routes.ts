import { Router } from 'express'
import { LoginController } from '../controllers/auth.controller'

const router = Router()

router.get('/', (request, response) => response.send('Hello Zustand!'))

router.post('/login', LoginController)

export default router
