import {ObjectStatus, IUser, IService} from "../index.mjs";

export interface IFaqService {
  id: string,
  uniqRef?: string,
  slug?: string,
  authorID: string,
  author?: IUser,
  listingPosition: number,
  faqAnswerID: string,
  faqQuestionID: string,
  serviceID: string,
  service?: IService,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
}

export type FaqServiceInput = {
  faqServiceID: string,
  authorID?: string,
  listingPosition?: number,
  faqAnswerID?: string,
  faqQuestionID?: string,
  serviceID?: string,
  state?: ObjectStatus,
}
