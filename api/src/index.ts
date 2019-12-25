import session from "express-session";
import mongoose from "mongoose";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import { APP_PORT, REDIS_OPTIONS, MONGO_URI, MONGO_OPTIONS } from "./config";
import { createApp } from "./app";

(async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

    const RedisStore = connectRedis(session);

    const client = new Redis(REDIS_OPTIONS);

    const store = new RedisStore({ client });

    const app = createApp(store);

    app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
