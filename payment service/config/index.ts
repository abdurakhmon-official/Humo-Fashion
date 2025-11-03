import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.STAGE = process.env.STAGE || 'local'

let envConfig = require('./local').default

export default merge(
    {
        stage: process.env.STAGE || 'local',
        env: process.env.NODE_ENV || 'development',
        port: 3003,
        cors: {
            origin: true,
            credentials: true
        }
    },
    envConfig
)

