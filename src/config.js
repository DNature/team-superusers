export const {
  APP_PORT = 8080,
  NODE_ENV = 'development',
  MONGODB = 'mongodb://localhost:27017/superusers-real-estate',
  SECRET = 'try to keep things simple'
} = process.env;

export const IN_PRODUCTION = NODE_ENV === 'production';
