import { User } from "../../entities/User";
import { IUserRespositories } from "../../repositories/IUserRespositories";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCases {

  constructor(
    private userRepository: IUserRespositories,
  ){}

  async execute(data: CreateUserDTO) {
    const verifyUser = await this.userRepository.findUserByEmail(data.email_user);

    if(verifyUser.length){
      throw new Error('This user alredy exists.');
    }
  
    const user  = new User(data);

    return this.userRepository.findById((await this.userRepository.saveUser(user))[0]);
  }
}