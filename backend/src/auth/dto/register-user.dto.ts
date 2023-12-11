import { IsString, Length } from 'class-validator';
import { LoginDto } from './login-user.dto';

export class RegisterUserDto extends LoginDto {
	@IsString()
	@Length(5, 10)
	email: string;

	@IsString()
	@Length(5, 10)
	name: string;
}
