import * as dotenv from 'dotenv'
dotenv.config()

interface IJwt {
  secret: string
  expiresIn: string
}

export const jwt: IJwt = {
  secret: `${process.env.JWT_PASS}`,
  expiresIn: '24h',
}
