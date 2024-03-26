import { IUser } from "../../intefaces/IUser";
import { IUserRepository } from "../../intefaces/IUserRepository";

export class GetAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IUser[]> {
    return await this.userRepository.findAll()
  }
}