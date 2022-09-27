import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { listUsersController } from "./useCases/listUser";

const router = Router()

router.post('/users', (request, response ) => {
  return createUserController.handle(request, response);
})

router.get('/users', (request, response ) => {
  return listUsersController.handle(request, response);
})

export { router }