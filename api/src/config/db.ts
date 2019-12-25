/* eslint no-unused-vars: 0 */
import { ConnectionOptions } from "mongoose";

const {
  MONGO_USERNAME = "phantom",
  MONGO_PASSWORD = "mypassword",
  MONGO_HOST = "localhost",
  MONGO_PORT = 27017,
  MONGO_DATABASE = "node-auth"
} = process.env;

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(
  MONGO_PASSWORD
)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
