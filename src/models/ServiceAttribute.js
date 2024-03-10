import {ObjectStatus, IUser} from "../index.mjs";

export interface IServiceAttribute {
  serviceAttributeID: string,
  uniqRef?: string,
  slug?: string,
  authorID: string,
  author?: IUser,
  attributeName: string
  attributeValue: string
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type ServiceAttributeInput = {
  serviceAttributeID: string,
  authorID?: string,
  attributeName?: string,
  attributeValue?: string,
  serviceID?: string,
  state?: ObjectStatus,
}
