import { User } from '../interfaces/user.interface';
import { UsersRepository } from '../repositories/users-repository.interface';
import BaseController from './base-controller';

export class UsersController extends BaseController<User> {
    constructor(private usersRepository: UsersRepository) {
        super(usersRepository);
    }

    findUserByFirstName(name: string): User {
        return this.usersRepository.findUserByFirstName(name);
    }
}