import express from "express";
import session, { Store } from "express-session";
import { SESSION_OPTIONS } from "./config";

export const createApp = (store: Store) => {

  const app = express();

  app.use(
    session({
      ...SESSION_OPTIONS,
      store
    })
  );

  return app
}