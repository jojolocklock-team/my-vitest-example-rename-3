import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  describe('addUser', () => {
    it('should add a user and return the newly added user', () => {
      const user = userManager.addUser('John Doe', 'john@example.com');
      expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
      expect(userManager.getAllUsers()).toHaveLength(1);
    });
  });

  describe('findUserById', () => {
    it('should find a user by ID', () => {
      const user = userManager.addUser('Jane Doe', 'jane@example.com');
      const foundUser = userManager.findUserById(user.id);
      expect(foundUser).toEqual(user);
    });

    it('should return undefined if user is not found', () => {
      userManager.addUser('Jane Doe', 'jane@example.com');
      const foundUser = userManager.findUserById(999);
      expect(foundUser).toBeUndefined();
    });
  });

  describe('deleteUser', () => {
    it('should delete a user by ID and return true', () => {
      const user = userManager.addUser('John Doe', 'john@example.com');
      const result = userManager.deleteUser(user.id);
      expect(result).toBe(true);
      expect(userManager.getAllUsers()).toHaveLength(0);
    });

    it('should return false if user is not found', () => {
      userManager.addUser('John Doe', 'john@example.com');
      const result = userManager.deleteUser(999);
      expect(result).toBe(false);
      expect(userManager.getAllUsers()).toHaveLength(1);
    });
  });

  describe('getAllUsers', () => {
    it('should return all users', () => {
      const user1 = userManager.addUser('John Doe', 'john@example.com');
      const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
      const users = userManager.getAllUsers();
      expect(users).toEqual([user1, user2]);
    });

    it('should return an empty array if no users exist', () => {
      const users = userManager.getAllUsers();
      expect(users).toEqual([]);
    });
  });
});
