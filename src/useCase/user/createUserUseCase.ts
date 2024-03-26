import { IUser } from "../../intefaces/IUser";
import { IUserRepository } from "../../intefaces/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    const user = await this.userRepository.createUser(userData);
    return user;
  }
}
