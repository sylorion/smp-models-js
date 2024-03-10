import {ObjectStatus, IUser} from "../index.mjs";

export interface ITopic {
  id: string,
  uniqRef: string,
  slug: string,
  authorID: string,
  author?: IUser,
  title: string,
  description: string,
  parentTopicID: string,
  parentTopic: ITopic,
  level: number,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type TopicInput = {
  topicID: string,
  authorID?: string,
  title?: string,
  description?: string,
  parentTopicID?: string,
  level?: number,
  state?: ObjectStatus,
}
