import { User } from "../entities/User";

export interface IUserRespositories {
  findUserByEmail(email: String): Promise<User[]>;
  findById(id: Number): Promise<User[]>;
  saveUser(user: User): Promise<number[]>
}