import {ObjectStatus} from "../index.mjs";

export interface IFaqAnswer {
  faqAnswerID: string,
  uniqRef: string,
  slug: string,
  authorID: string,
  topicID: string,
  lang: string,
  answer: string,
  parentFaqAnswerID: string,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
}

export type FaqAnswerInput = {
  faqAnswerID: string,
  authorID?: string,
  topicID?: string,
  lang?: string,
  answer?: string,
  parentFaqAnswerID?: string,
  state?: ObjectStatus,
}

