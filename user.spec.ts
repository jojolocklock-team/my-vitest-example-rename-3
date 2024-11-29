import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a user and return the new user with an incremented ID', () => {
    const user1 = userManager.addUser('John Doe', 'john@example.com');
    expect(user1).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });

    const user2 = userManager.addUser('Jane Smith', 'jane@example.com');
    expect(user2).toEqual({ id: 2, name: 'Jane Smith', email: 'jane@example.com' });
  });

  it('should find a user by ID', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  it('should return undefined when finding a user by a non-existent ID', () => {
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID and return true', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    const result = userManager.deleteUser(user.id);
    expect(result).toBe(true);

    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toBeUndefined();
  });

  it('should return false when trying to delete a non-existent user', () => {
    const result = userManager.deleteUser(999);
    expect(result).toBe(false);
  });

  it('should retrieve all users', () => {
    const user1 = userManager.addUser('John Doe', 'john@example.com');
    const user2 = userManager.addUser('Jane Smith', 'jane@example.com');

    const allUsers = userManager.getAllUsers();
    expect(allUsers).toEqual([user1, user2]);
  });

  it('should return an empty array if no users are present', () => {
    const allUsers = userManager.getAllUsers();
    expect(allUsers).toEqual([]);
  });
});
