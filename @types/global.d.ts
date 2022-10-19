declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // env
      NODE_ENV: 'production' | 'development'
      TIMEZONE: string
      NEXT_PUBLIC_GOOGLE_ANALYTICS: string
    }
  }
}

export {}
