import express from "express";
import { connect as mongooseConnect } from "mongoose";
import { Server, createServer } from "http";

import router from "./api/routes";
import errorHandler from "./middlewares/errorHandler";
import requestID from "./middlewares/requestID";
import { MONGODB_CONNECTION_STRING } from "./config/settings";
import { Seeder } from "mongo-seeding";
import path from "path";
import populateImports from "./util/populateImports";

let server: Server;

async function startServer(port: number) {
  const app = express();

  await populateImports();

  const seeder = new Seeder({ database: MONGODB_CONNECTION_STRING });
  const collections = seeder.readCollectionsFromPath(
    path.join(__dirname, "./data/import")
  );
  await Promise.all([
    seeder.import(collections),
    await mongooseConnect(MONGODB_CONNECTION_STRING),
  ]);

  app.use(express.json({ limit: "5mb" }));
  app.use(requestID);
  app.use(router);
  app.use(errorHandler);

  server = createServer(app);

  server.listen(port);
}

async function stopServer(error?: Error) {
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
