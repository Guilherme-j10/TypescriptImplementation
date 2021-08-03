import { Response, Request } from 'express';
import { CreateUserUseCases } from './CreateUserUseCases';

export class ControllerUser {

  constructor( private useCaseUserCreate: CreateUserUseCases ){}

  async handle(request: Request, response: Response): Promise<Response>{
    const { email, name, pass } = request.body; 

    try {

      const createUser = await this.useCaseUserCreate.execute({
        email_user: email,
        name_user: name,
        password_user: pass
      });

      return response.json(createUser);

    } catch (error) {
      return response.json({
        error: true,
        message: error.message || 'Error inesperado'
      })
    }
  }

}
