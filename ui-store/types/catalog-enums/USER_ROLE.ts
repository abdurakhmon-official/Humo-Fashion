// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

export enum USER_ROLE {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER"
}

export const USER_ROLE_VALUES = [
  "SUPER_ADMIN",
  "ADMIN",
  "USER"
] as const;
