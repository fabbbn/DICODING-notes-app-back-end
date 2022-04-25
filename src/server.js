const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');

const init = async () => {
  const notesService = new NotesService();

  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // registrasi satu plugin
  await server.register({
    plugin: notes,
    options: {
      service: notesService,
    },
  });

  await server.start();
  process.stdout.write(`Server berjalan pada ${server.info.uri}`);
};

// emmiter unhandled exception, close the program
// process.on('unhandledRejection', (err) => {
//     console.log(err);
//     process.exit(1);
// });

init();
