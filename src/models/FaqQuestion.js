import {IUser, ObjectStatus, ITopic} from "../index.mjs";

export interface IFaqQuestion {
  id: string,
  uniqRef?: string,
  slug?: string,
  authorID: string,
  author?: IUser,
  topicID: string,
  topic?: ITopic,
  lang: string,
  question: string,
  parentFaqQuestionID: string,
  parentFaqQuestion?: IFaqQuestion,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type FaqQuestionInput = {
  faqQuestionID: string,
  authorID?: string,
  topicID?: string,
  lang?: string,
  question?: string,
  parentFaqQuestionID?: string,
  state?: ObjectStatus,
}
