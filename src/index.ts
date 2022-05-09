// import dotenv from 'dotenv ';
import express from 'express';
// import config from '../config/index';
import app from './app';

// dotenv.config
const PORT = process.env.APP_PORT || 3000;

const bootstrap = () => {
  app(
    PORT
    //   config: Config
    //   db: Database
    //   routingLib: express.Express
    //   someRoutes: [routes]
  );
};

bootstrap();
