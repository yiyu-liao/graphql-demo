import { App } from './server'

const server: App = new App(process.env.API_PORT || 3000);

server.startServer();