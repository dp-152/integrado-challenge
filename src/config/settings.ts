export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || 3000;

if (!process.env.APP_API_KEY) {
  throw new Error("Missing setting field: API KEY");
}

export const APP_API_KEY = process.env.APP_API_KEY;
