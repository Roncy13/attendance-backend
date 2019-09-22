import { MaxLength, MinLength, IsNotEmpty, IsDate, IsInt, IsIn, MaxDate, Matches, IsOptional, IsEmail } from 'class-validator';
import { UserTypes } from './user-types';

export class UserDTO {

  @MaxLength(100)
  @IsNotEmpty()
  firstName: string;

  @IsOptional()
  @MaxLength(100)
  middleName: string;

  @MaxLength(100)
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @Matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, {
    message: "Birthday Format Should be YYYY-MM-DD"
  })
  birthday: Date;

  @MaxLength(100)
  @IsNotEmpty()
  occupation: string;

  @MaxLength(100)
  @IsNotEmpty()
  address: string;

  @IsInt()
  @IsIn([UserTypes.STUDENT, UserTypes.TRAINER], {
    message: "User Type must be 0 for Student and 1 for Trainer"
  })
  userType: UserTypes;

  @MaxLength(100)
  @IsNotEmpty()
  password: string;

  salt: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
