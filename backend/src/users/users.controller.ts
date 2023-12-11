import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
// import { Users } from './users.model';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	@UseGuards(JwtAuthGuard)
	async getAllUsers(
		@Req() request: Request,
		@Res() response: Response,
	): Promise<any> {
		try {
			const result = await this.usersService.getAllUsers();
			return response.status(200).json({
				status: 'Ok',
				message: 'Succefully fetch data!',
				result,
			});
		} catch (error) {
			console.log(error);
			return response.status(500).json({
				status: 'Bad!',
				message: 'Internal Server Error!',
			});
		}
	}
}
