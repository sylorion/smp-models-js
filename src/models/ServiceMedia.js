import {ObjectStatus, IUser, IService} from "../index.mjs";

// Not uset In NoSQL Database
export interface IServiceMedia {
  id: string,
  uniqRef?: string,
  slug?: string,
  authorID: string,
  author?: IUser,
  listingPosition: number,
  legend: string,
  mediaID: string,
  serviceID: string,
  service?: IService,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type ServiceMediaInput = {
  serviceMediaID: string,
  authorID?: string,
  mediaID?: string,
  serviceID?: string,
  legend?: string,
  listingPosition?: number,
  state?: ObjectStatus,
}
