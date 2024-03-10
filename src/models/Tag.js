import {ObjectStatus, IUser, ITopic} from "../index.mjs";

export interface ITag {
  id: string,
  uniqRef: string,
  slug: string,
  authorID: string,
  author?: IUser,
  value: string,
  topicID: string,
  topic?: ITopic,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type TagInput = {
  tagID: string,
  authorID?: string,
  value?: string,
  topicID?: string,
  listingPosition?: number,
  state?: ObjectStatus,
}

