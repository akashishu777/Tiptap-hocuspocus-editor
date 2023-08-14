import { Server } from "@hocuspocus/server";
import { Logger } from "@hocuspocus/extension-logger";
import { SQLite } from "@hocuspocus/extension-sqlite";

const server = Server.configure({
  port: 1234,
  address: "127.0.0.1",
  name: "hocuspocus-fra1-01",
  extensions: [new Logger(), new SQLite()],
});

server.enableMessageLogging();

server.listen();
