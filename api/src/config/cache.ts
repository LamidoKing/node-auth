/* eslint no-unused-vars: 0 */
import { RedisOptions } from "ioredis";

const {
  REDIS_PORT = 6379,
  REDIS_HOST = "localhost",
  REDIS_PASSWORD = "mypassword"
} = process.env;

export const REDIS_OPTIONS: RedisOptions = {
  port: +REDIS_PORT,
  host: REDIS_HOST,
  password: REDIS_PASSWORD
};
