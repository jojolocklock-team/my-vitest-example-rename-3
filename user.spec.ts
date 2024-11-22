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
    expect(userManager.getAllUsers()).toHaveLength(1);
  });

  it('should find a user by ID', () => {
    const user = userManager.addUser('Jane Doe', 'jane@example.com');
    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  it('should return undefined for non-existent user ID', () => {
    userManager.addUser('Alice', 'alice@example.com');
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID', () => {
    const user = userManager.addUser('Bob', 'bob@example.com');
    const isDeleted = userManager.deleteUser(user.id);
    expect(isDeleted).toBe(true);
    expect(userManager.getAllUsers()).toHaveLength(0);
  });

  it('should return false when trying to delete a non-existent user', () => {
    const isDeleted = userManager.deleteUser(999);
    expect(isDeleted).toBe(false);
  });

  it('should retrieve all users', () => {
    const user1 = userManager.addUser('Charlie', 'charlie@example.com');
    const user2 = userManager.addUser('Dana', 'dana@example.com');
    const allUsers = userManager.getAllUsers();
    expect(allUsers).toHaveLength(2);
    expect(allUsers).toEqual([user1, user2]);
  });
});
