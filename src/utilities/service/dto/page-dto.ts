import { IsNumberString, IsOptional } from "class-validator";

export class PageDTO {

  @IsNumberString()
  @IsOptional()
  page?: number = 1;
}