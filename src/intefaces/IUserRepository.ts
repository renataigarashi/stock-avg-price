import { IUser } from "./IUser";

export interface IUserRepository {
  createUser(user: IUser): Promise<IUser>
  findAll(): Promise<IUser[]>
}