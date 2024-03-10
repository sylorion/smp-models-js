import {ObjectStatus, UserType, IProfile} from "../index.mjs";

export interface IUser {
  userID: string,
  uniqRef: string,
  slug: string,
  username: string,
  previewEmail?: string,
  email: string,
  newEmail?: string,
  plan: string,
  profileID: string,
  profile: IProfile,
  userKind: UserType,
  lastLogin: Date,
  twoFactorEnabled: boolean,
  loginDuration: number,
  rsaPublicKey: string,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type UserInput = {
  userID: string,
  username?: string,
  email?: string,
  newEmail?: string,
  password?: string,
  newPassword?: string,
  plan?: string,
  profileID?: number,
  userKind?: UserType,
  twoFactorEnabled?: boolean
  rsaPublicKey?: string,
  state?: ObjectStatus,
}

export interface UserToken {
  userTokenID: string,
  userID: string,
  token: string,
  expiresIn: number,
  platform?: string,
  applicationID?: string,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}


