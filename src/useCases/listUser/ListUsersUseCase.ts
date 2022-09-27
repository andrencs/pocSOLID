import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IListUsersRequestDTO } from "./ListUsersDTO";

export class ListUsersUseCase {

  constructor(
    private usersRepository: IUsersRepository
  ){}

  async execute(): Promise<IListUsersRequestDTO[]>{

    let users: IListUsersRequestDTO[] = await this.usersRepository.getAllUsers();

    return users;
    
  }
}