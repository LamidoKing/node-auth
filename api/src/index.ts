import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import {
  APP_PORT,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  MONGO_URI,
  MONGO_OPTIONS
} from "./config";

(async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

    const RedisStore = connectRedis(session);

    const client = new Redis(REDIS_OPTIONS);

    const app = express();

    app.use(
      session({
        ...SESSION_OPTIONS,
        store: new RedisStore({ client })
      })
    );

    app.get("/", (req, res) => res.json({ message: "Ok" }));

    app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
