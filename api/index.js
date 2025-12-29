import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);

(async () => {
  try {
    await registerRoutes(httpServer, app);
  } catch (err) {
    console.error("Failed to register routes:", err);
  }
})();

export default app;
