import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgreUsersRepository implements IUsersRepository {

  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.users.map(user => {
      delete user.password
      return user
    })
  }

}