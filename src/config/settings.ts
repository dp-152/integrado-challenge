export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || "3000";
export const APP_API_KEY_HEADER = process.env.APP_API_KEY_HEADER || "X-API-Key";

if (!process.env.APP_API_KEY) {
  throw new Error("Missing setting field: API KEY");
}

export const APP_API_KEY = process.env.APP_API_KEY;

if (!process.env.MONGODB_CONNECTION_STRING) {
  throw new Error("Missing setting field: MongoDB Connection String");
}

export const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
