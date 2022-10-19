import _ from 'lodash'

// for local
const env = {
  timezone: process.env.TIMEZONE,
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
}

// for browser by prefixing with NEXT_PUBLIC_
const publicEnv = {}

export { env, publicEnv }

function toBool(value: any) {
  if (_.isNil(value)) {
    return undefined
  }

  if (value === true || Number(value) >= 1 || _.lowerCase(value) === 'true') {
    return true
  }

  return false
}
