import { PostgreUsersRepository } from "../../repositories/implementations/PostgreUsersRepositories";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const postgreUsersRepository = new PostgreUsersRepository();

const listUsersUseCase = new ListUsersUseCase(
  postgreUsersRepository
)

const listUsersController = new ListUsersController(
  listUsersUseCase
)

export { listUsersUseCase, listUsersController}