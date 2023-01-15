import { Router } from 'express'
import { LoginController } from '../controllers/auth.controller'
import { ProfileController } from '../controllers/profile.controller'
import { RequireAuth } from '../middlewares/require-auth.middleware'

const router = Router()

router.get('/', (request, response) => response.send('Hello Zustand!'))

router.post('/login', LoginController)
router.get('/profile', RequireAuth, ProfileController)

export default router
