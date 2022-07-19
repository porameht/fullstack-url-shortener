import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
  // get the destination from the request body

  const { destination } = req.body;

  // create a shortUrl

  const newUrl = await shortUrl.create({ destination });

  // return the shorturl

  return res.send(newUrl);
}
