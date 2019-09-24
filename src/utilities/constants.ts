import { HttpStatus } from "@nestjs/common";

export const NOT_FOUND = HttpStatus.NOT_FOUND
export enum STATUS {
  ACTIVE = 1,
  INACTIVE = 0,
}

export enum StatusCode {
  created = 200,
  updated = 201,
}

export const MIN_LENGTH = 5;
