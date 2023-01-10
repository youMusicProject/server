const dotenv = require('dotenv')
const logger = require('loglevel')

dotenv.config()

logger.enableAll()

const ENV = process.env.NODE_ENV || 'development'

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug
    },
    db: {
      uri: process.env.MONGODB_URL
    },
    auth0: {
      client_origin: process.env.CLIENT_ORIGIN_URL,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER
    }
  },
  production: {
    app: {
      PORT: process.env.PORT || 4000
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug
    },
    db: {
      url: ''
    }
  }
}

module.exports = CONFIG[ENV]