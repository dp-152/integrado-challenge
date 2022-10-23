import express from "express";
import { Server, createServer } from "http";

import router from "./api/routes";

let server: Server;

function startServer(port: number) {
  const app = express();

  app.use(express.json({ limit: "5mb" }));
  app.use(router);

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
