import * as dotenv from 'dotenv'
dotenv.config()

export const NODE_ENV = process.env.NODE_ENV

export const INFURA_ACCESS_TOKEN = process.env.INFURA_ACCESS_TOKEN

export const WEB3_PROVIDER_URI = NODE_ENV === 'production' ?
  `https://mainnet.infura.io/${INFURA_ACCESS_TOKEN}` : `https://ropsten.infura.io/${INFURA_ACCESS_TOKEN}`

export const PORT = parseInt(process.env.PORT, 10)

export const PG_DB = process.env.PG_DB
export const PG_HOST = process.env.PG_HOST
export const PG_USER = process.env.PG_USER
export const PG_PORT = parseInt(process.env.PG_PORT, 10)
export const PG_PASS = process.env.PG_PASS
export const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID
export const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET

export const STREAMLABS_CLIENT_ID = process.env.STREAMLABS_CLIENT_ID
export const STREAMLABS_CLIENT_SECRET = process.env.STREAMLABS_CLIENT_SECRET

export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY

export const WEB_CLIENT_URL = process.env.WEB_CLIENT_URL
export const API_URL = process.env.API_URL
