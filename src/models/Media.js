import {ObjectStatus, MediaType, IUser} from "../index.mjs";

export interface IMedia {
  mediaID: string,
  uniqRef: string,
  slug: string,
  authorID: string,
  author?: IUser,
  mediaType: MediaType,
  legend: string,
  summary?: string,
  originalName: string,
  finalName?: string,
  url: string,
  size: string,
  state: ObjectStatus
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type MediaInput = {
  mediaID: string,
  authorID?: string,
  author?: IUser,
  mediaType?: MediaType,
  legend?: string,
  summary?: string,
  originalName?: string,
  finalName?: string,
  url?: string,
  size?: string,
  listingPosition?: number,
  state?: ObjectStatus,
}
