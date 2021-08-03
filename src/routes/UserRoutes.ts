import { Request, Response, Router } from 'express';
import { createUserController } from '../useCases/User';
const UserRoutes = Router();

UserRoutes.get('/', async (req: Request, res: Response) => {
  return createUserController.handle(req, res);
});

export { UserRoutes };