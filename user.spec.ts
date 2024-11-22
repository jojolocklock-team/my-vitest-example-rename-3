import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a new user', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  it('should find a user by ID', () => {
    const user1 = userManager.addUser('John Doe', 'john@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
    const foundUser = userManager.findUserById(user1.id);
    expect(foundUser).toEqual(user1);
  });

  it('should return undefined if user is not found by ID', () => {
    userManager.addUser('John Doe', 'john@example.com');
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    const result = userManager.deleteUser(user.id);
    expect(result).toBe(true);
    expect(userManager.findUserById(user.id)).toBeUndefined();
  });

  it('should return false if trying to delete a non-existent user', () => {
    const result = userManager.deleteUser(999);
    expect(result).toBe(false);
  });

  it('should get all users', () => {
    const user1 = userManager.addUser('John Doe', 'john@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
    const allUsers = userManager.getAllUsers();
    expect(allUsers).toEqual([user1, user2]);
  });

  it('should return an empty array if no users are present', () => {
    const allUsers = userManager.getAllUsers();
    expect(allUsers).toEqual([]);
  });
});
