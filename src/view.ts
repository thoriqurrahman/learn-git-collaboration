import { User } from "./model";

export class UserView {
  renderUserList(users: User[]): void {
    const userContainer = document.getElementById("user-list");
    if (!userContainer) return;

    userContainer.innerHTML = ""; // Clear existing content

    users.forEach(user => {
      const userItem = document.createElement("li");
      userItem.textContent = `${user.name} (${user.email})`;
      userContainer.appendChild(userItem);
    });
  }

  renderMessage(message: string): void {
    const messageContainer = document.getElementById("message");
    if (messageContainer) {
      messageContainer.textContent = message;
    }
  }
}
