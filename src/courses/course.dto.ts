import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { MIN_LENGTH } from "../utilities/constants";

export class CourseDto {
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(MIN_LENGTH)
  name: string;

  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(MIN_LENGTH)
  description: string;
}
