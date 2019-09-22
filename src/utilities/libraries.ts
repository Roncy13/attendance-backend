import { Response } from "express";
import { HttpStatus } from "@nestjs/common";

export const ResponseFormat = (resp: Response, message: string, data: any, status = HttpStatus.OK) => {
  resp.status(status).json({
    message,
    data
  })
}