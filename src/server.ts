import express from "express";
import { connect as mongooseConnect } from "mongoose";
import { Server, createServer } from "http";

import router from "./api/routes";
import errorHandler from "./middlewares/errorHandler";
import requestID from "./middlewares/requestID";
import { MONGODB_CONNECTION_STRING } from "./config/settings";

let server: Server;

function startServer(port: number) {
  const app = express();

  mongooseConnect(MONGODB_CONNECTION_STRING);

  app.use(express.json({ limit: "5mb" }));
  app.use(requestID);
  app.use(router);
  app.use(errorHandler);

  server = createServer(app);

  server.listen(port);
}

function stopServer(error?: Error) {
  if (error) {
    try {
      server.close();
      process.exit(1);
    } catch (e: unknown) {
      process.exit(1);
    }
  }
  process.exit(0);
}

export { startServer, stopServer };
