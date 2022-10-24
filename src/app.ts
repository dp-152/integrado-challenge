import { PORT } from "./config/settings";
import { startServer, stopServer } from "./server";

startServer(+PORT);

process.on("SIGTERM", stopServer);
process.on("SIGINT", stopServer);
process.on("uncaughtException", stopServer);

