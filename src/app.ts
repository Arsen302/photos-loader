import http from 'http';
import winston from 'winston';

// TODO: How to do IoC(inversion of control) without inversify, much quicker or cheaper
// TODO: What paradigm using for create a node.js project, OOP or FP
// TODO: How we can mix OOP and FP paradigm

// TODO: Research about different env in node.js project and how to structure that
//www.google.com/search?q=how+to+create+node+js+project+with+different+environments&rlz=1C1GCEA_enUA983UA983&oq=how+to+create+node+js+project+with+different+env&aqs=chrome.3.69i57j33i160l2j33i21j33i22i29i30.32341j0j1&sourceid=chrome&ie=UTF-8
// TODO: How to structure different library instances, so you don't have to store everything in one huge app file
//www.google.com/search?q=How+to+structure+different+library+instances&rlz=1C1GCEA_enUA983UA983&sxsrf=ALiCzsYsWVk41w1pQlXbugCIMi-6TQW6hA%3A1651672486723&ei=poVyYuDfK8Lj7_UPwMOS2Ag&ved=0ahUKEwjgyuy-_8X3AhXC8bsIHcChBIsQ4dUDCA4&uact=5&oq=How+to+structure+different+library+instances&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6CggjELADECcQiwM6CggAEEcQsAMQiwNKBAhBGABKBAhGGABQlSVY6TNg2TRoAnABeACAAXiIAawDkgEDMS4zmAEAoAEByAEDuAECwAEB&sclient=gws-wiz

interface App {
  
}

interface AppOptions {}

const app = (
  port: string | number
  //   config: Config
  //   db: Database
  //   routingLib: express.Express
  //   someRoutes: [routes]
) => {
  const server = http.createServer();
  //   const app = server(routingLib);
  const logger = winston.createLogger();
  //   const db = mongoose.createConnection(config.db);
  //   const db = mongoClient.createDatabase(config.db);
  try {
    //   Возможно надо будет опустить вызовы которые находятся выше
    // app.use(logger);
    logger.info(`app run on ${port}...`);

    // app.use(bodyParser);
    logger.info(`app run on ${port}...`);

    // app.router(...someRoutes);
    logger.info(`app run on ${port}...`);

    // const health = app.listen(port);
    logger.info(`app run on ${port}...`);

    // return health
  } catch (err) {
    logger.error(err);
  }
};

export default app;
