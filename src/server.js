const Hapi = require('@hapi/hapi');

const routes = require('./routes');
const notes = require("./notes");

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: "localhost",
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

// emmiter unhandled exception, close the program
// process.on('unhandledRejection', (err) => {
//     console.log(err);
//     process.exit(1);
// });

init();