/**
 * Enum representing the roles of a user.
 * @readonly
 * @enum {string}
 */
export enum UserRolesEnum {
  /** @member {string} */
  /** CLIENT */
  CLIENT = "client",
  /** @member {string} */
  /** ADMIN */
  ADMIN = "admin", // ! Admin role is not present currently
  /** @member {string} */
  /** BROKER */
  BROKER = "broker",
}

export interface IUser {
  email: string;
  role: UserRolesEnum;
  username: string;
}

export type UserState = {
  loading: boolean;
  error?: string;
  user?: IUser;
};
