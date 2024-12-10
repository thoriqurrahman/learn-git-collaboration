import { UserModel, User } from "./model";
import { UserView } from "./view";

export class UserController {
  private model: UserModel;
  private view: UserView;

  constructor(model: UserModel, view: UserView) {
    this.model = model;
    this.view = view;
  }

  // Add a new user
  addUser(name: string, email: string): void {
    const newUser: User = {
      id: Date.now(),
      name,
      email,
    };

    this.model.addUser(newUser);
    this.view.renderMessage("User added successfully!");
    this.updateView();
  }

  // Display all users
  updateView(): void {
    const users = this.model.getUsers();
    this.view.renderUserList(users);
  }
}