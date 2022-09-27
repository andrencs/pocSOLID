import { Request, Response } from "express";
import { IListUsersRequestDTO } from "./ListUsersDTO";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {

  constructor(
    private listUsersUseCase: ListUsersUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {

    let users: IListUsersRequestDTO[] = [];
    
    try {
      users = await this.listUsersUseCase.execute();
      return response.status(200).send(users);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error"
      })
    }
  }
}