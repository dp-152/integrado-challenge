import { startServer, stopServer } from "./server";

startServer(3010);

process.on("SIGTERM", stopServer);
process.on("SIGINT", stopServer);
process.on("uncaughtException", stopServer);

