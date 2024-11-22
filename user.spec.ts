import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a user and return the new user', () => {
    const user = userManager.addUser('John Doe', 'john.doe@example.com');
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
  });

  it('should find a user by ID', () => {
    const user1 = userManager.addUser('John Doe', 'john.doe@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane.doe@example.com');

    const foundUser = userManager.findUserById(user1.id);
    expect(foundUser).toEqual(user1);

    const foundUser2 = userManager.findUserById(user2.id);
    expect(foundUser2).toEqual(user2);
  });

  it('should return undefined when finding a non-existent user by ID', () => {
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID and return true', () => {
    const user = userManager.addUser('John Doe', 'john.doe@example.com');

    const result = userManager.deleteUser(user.id);
    expect(result).toBe(true);

    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toBeUndefined();
  });

  it('should return false when trying to delete a non-existent user', () => {
    const result = userManager.deleteUser(999);
    expect(result).toBe(false);
  });

  it('should return all users', () => {
    const user1 = userManager.addUser('John Doe', 'john.doe@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane.doe@example.com');

    const users = userManager.getAllUsers();
    expect(users).toEqual([user1, user2]);
  });

  it('should return an empty array when there are no users', () => {
    const users = userManager.getAllUsers();
    expect(users).toEqual([]);
  });
});
