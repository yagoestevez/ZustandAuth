import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const LoginController = (request: Request, response: Response) => {
  const payload = { payload: 'payload' }
  const secret = process.env.JWT_SECRET || 's3cr.t'
  const expiresIn = 60 * 60 * 24

  const token = jwt.sign({ payload }, secret, { expiresIn })

  return response.json({ token })
}
