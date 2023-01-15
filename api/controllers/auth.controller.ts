import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const LoginController = (request: Request, response: Response) => {
  const token = jwt.sign(
    {
      payload: 'payload',
    },
    'secretKey', // Hide it...
    {
      expiresIn: 60 * 60 * 24, // 24H
    }
  )

  return response.json({ token })
}
