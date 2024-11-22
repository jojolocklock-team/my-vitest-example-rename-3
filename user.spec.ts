import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a user and return the added user', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  it('should find a user by ID', () => {
    const user1 = userManager.addUser('John Doe', 'john@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
    expect(userManager.findUserById(user1.id)).toEqual(user1);
    expect(userManager.findUserById(user2.id)).toEqual(user2);
  });

  it('should return undefined when finding a non-existing user by ID', () => {
    expect(userManager.findUserById(999)).toBeUndefined();
  });

  it('should delete a user by ID and return true', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    expect(userManager.deleteUser(user.id)).toBe(true);
    expect(userManager.findUserById(user.id)).toBeUndefined();
  });

  it('should return false when trying to delete a non-existing user', () => {
    expect(userManager.deleteUser(999)).toBe(false);
  });

  it('should retrieve all users', () => {
    const user1 = userManager.addUser('John Doe', 'john@example.com');
    const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
    expect(userManager.getAllUsers()).toEqual([user1, user2]);
  });

  it('should return an empty array when there are no users', () => {
    expect(userManager.getAllUsers()).toEqual([]);
  });
});
