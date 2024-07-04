export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Використання Record для створення RoleDescription
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};