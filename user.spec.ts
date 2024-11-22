import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a new user and return the user object', () => {
    const user = userManager.addUser('John Doe', 'john.doe@example.com');
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
  });

  it('should find a user by ID', () => {
    const user = userManager.addUser('Jane Doe', 'jane.doe@example.com');
    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  it('should return undefined when searching for a non-existent user by ID', () => {
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID and return true', () => {
    const user = userManager.addUser('John Doe', 'john.doe@example.com');
    const result = userManager.deleteUser(user.id);
    expect(result).toBe(true);
    expect(userManager.findUserById(user.id)).toBeUndefined();
  });

  it('should return false when attempting to delete a non-existent user', () => {
    const result = userManager.deleteUser(999);
    expect(result).toBe(false);
  });

  it('should retrieve all users', () => {
    const user1 = userManager.addUser('John Doe', 'john.doe@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane.doe@example.com');
    const users = userManager.getAllUsers();
    expect(users).toEqual([user1, user2]);
  });

  it('should return an empty array if no users have been added', () => {
    const users = userManager.getAllUsers();
    expect(users).toEqual([]);
  });
});
