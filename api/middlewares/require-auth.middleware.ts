import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const RequireAuth = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  const authHeaders = request.headers.authorization
  const unauthorizedJson = {
    message: 'Unauthorized',
  }

  if (!authHeaders) {
    return response.status(401).json(unauthorizedJson)
  }

  const token = authHeaders.split(' ')[1]

  if (!token) {
    return response.status(401).json(unauthorizedJson)
  }

  jwt.verify(token, 'secretKey', (error, payload) => {
    if (error) {
      return response.status(401).json(unauthorizedJson)
    }

    request.user = payload
  })

  next()
}

export { RequireAuth }
