
import {ObjectStatus, IUser} from "../index.mjs";

export interface IPaymentConfig {
  id: string,
  uniqRef: string,
  slug: string,
  authorID: string,
  author?: IUser,
  paymentMethodID: string,
  partnerTokenAuthDetails: JSON
  paymentConfigDetails: JSON
  state: ObjectStatus
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type PaymentConfigInput = {
  paymentConfigID: string,
  authorID?: string,
  paymentMethodID?: string,
  partnerTokenAuthDetails?: JSON
  paymentConfigDetails?: JSON
  state?: ObjectStatus,
}

