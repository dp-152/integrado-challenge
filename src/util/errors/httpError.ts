export default class HttpError extends Error {
  public statusCode: number = 0;
  public data?: any; // eslint-disable-line

  constructor(message: string) {
    super(message);
  }

  public _toJSON() {
    return {
      message: this.message,
      status: this.statusCode,
      data: this.data,
      stack: process.env.NODE_ENV === "development" ? this.stack : null,
    };
  }
}
