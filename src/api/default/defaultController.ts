import { Request, Response } from "express";

async function defaultController(_: Request, response: Response) {
  return response
    .status(404)
    .json({ message: "requested resource not found" })
    .send()
    .end();
}

export default defaultController;
