import { DatabaseMethodsUsers } from "../../repositories/implementations/DatabaseMethodsUser";
import { ControllerUser } from "./ControllerUser";
import { CreateUserUseCases } from "./CreateUserUseCases";

const databaseMethodsUsers = new DatabaseMethodsUsers();

const createUserUseCases = new CreateUserUseCases(
  databaseMethodsUsers
);

const createUserController = new ControllerUser(
  createUserUseCases
);

export { createUserController };