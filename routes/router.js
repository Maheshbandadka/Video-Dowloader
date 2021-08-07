import downloader from '../core/downloader/downloader.routes.js'


class Routes {
  constructor(app) {
    this.configureCors(app);
    app.use('/v1/', downloader);
   
  }

  configureCors(app) {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
      res.setHeader('Cache-Control', 'no-cache');
      next();
    });
  }
}
export default Routes;