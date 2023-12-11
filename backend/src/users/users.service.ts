import { PrismaService } from 'src/prisma.service';
import { User } from './users.model';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async getAllUsers(): Promise<User[]> {
		return this.prisma.user.findMany();
	}

	async createUser(data: User): Promise<User> {
		const existing = await this.prisma.user.findUnique({
			where: { username: data.username },
		});

		if (existing) {
			throw new ConflictException('Username already taken');
		}

		return this.prisma.user.create({ data });
	}
}
