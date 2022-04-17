const Hapi = require('@hapi/hapi');

const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  process.stdout.write(`Server berjalan pada ${server.info.uri}`);
};

// emmiter unhandled exception, close the program
// process.on('unhandledRejection', (err) => {
//     console.log(err);
//     process.exit(1);
// });

init();
