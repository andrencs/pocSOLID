import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreUsersRepository } from "../../repositories/implementations/PostgreUsersRepositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgreUsersRepository = new PostgreUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgreUsersRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }