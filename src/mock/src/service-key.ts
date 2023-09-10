import { randomBytes } from 'crypto'

export const serviceKey = randomBytes(8).toString('hex')
