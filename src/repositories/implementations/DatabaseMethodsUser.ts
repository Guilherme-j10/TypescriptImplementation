import { connection } from "../../database/Connection";
import { User } from "../../entities/User";
import { IUserRespositories } from "../IUserRespositories";

export class DatabaseMethodsUsers implements IUserRespositories {

  async findUserByEmail(email: String): Promise<User[]> {
    return await connection.select().from('users').where({ email_user: email });
  }

  async saveUser(data: User): Promise<number[]> {
    return await connection.insert({ name_user: data.name_user, email_user: data.email_user, password_user: data.password_user }).into('users');
  }

  async findById(id: Number): Promise<User[]> {
    return await connection.select().from('users').where({ user_id: id });
  }

}