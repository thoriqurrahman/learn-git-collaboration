export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserModel {
  private users: User[] = [];

  // Add a new user
  addUser(user: User): void {
    this.users.push(user);
  }

  // Get all users
  getUsers(): User[] {
    return this.users;
  }

  // Get a user by ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
