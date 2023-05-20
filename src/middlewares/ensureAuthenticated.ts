import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { jwt } from '../config/auth'
import AppError from '../errors/AppError'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    throw new AppError('Unauthorized access', 401)
  }

  const [, token] = authorization.split(' ')
  try {
    const { secret } = jwt

    const decoded = verify(token, secret)

    const { sub } = decoded as ITokenPayload

    req.user = {
      id: sub,
    }

    return next()
  } catch (error) {
    throw new AppError('Invalid JWT token', 401)
  }
}
