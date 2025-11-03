import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.STAGE = process.env.STAGE || 'local'

export const DATABASE_URL = process.env.DATABASE_URL;

let envConfig

if (process.env.STAGE === 'producttion') {
    envConfig = require('./prod').default
} else if (process.env.STAGE === 'testing') {
    envConfig = require('./testing').default
} else {
    envConfig = require('./local').default
}

export default merge(
    {
        stage: process.env.STAGE || 'local',
        env: process.env.NODE_ENV || 'development',
        port: 3001,
        secrets: {
            jwt: process.env.JWT_SECRET,
            dbURL: process.env.DATABASE_URL
        },
        cors: {
            origin: true,
            credentials: true,
        }
    },
    envConfig
)