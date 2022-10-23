import { Request, Response } from "express";

async function statusController(_: Request, response: Response) {
  return response
    .status(200)
    .json({ message: "ok", version: process.env.npm_package_version })
    .send()
    .end();
}

export default statusController;
