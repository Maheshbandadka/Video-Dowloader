import swaggerAutogen from 'swagger-autogen';
const swagger = swaggerAutogen()


const doc = {
  info: {
    "version": "1.0",                // by default: "1.0.0"
    "title": "Dowloader Service",                  // by default: "REST API"
    "description": "Documentation"             // by default: ""
  },
  host: "video-dowloader.herokuapp.com",                         // by default: "localhost:3000"
  basePath: "/",                     // by default: "/"
  schemes: ["http", "https"],                      // by default: ['http']
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [                           // by default: empty Array
  ],
  securityDefinitions: {

  },        // by default: empty object
  definitions: {

  }                  // by default: empty object
}

const outputFile = './views/swagger-api-view.json'
const endpointsFiles = ['./routes/router.js']


/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */


await swagger(outputFile, endpointsFiles, doc)