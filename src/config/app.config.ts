export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB || 'mongodb://192.168.100.92:27017/nest-pokemon',
  port: process.env.PORT || 3000,
});
