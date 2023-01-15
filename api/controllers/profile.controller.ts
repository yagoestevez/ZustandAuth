import { Request, Response } from 'express'

export const ProfileController = (request: Request, response: Response) => {
  return response.json({
    message: 'Welcome to your profile',
    profile: request.user,
  })
}
