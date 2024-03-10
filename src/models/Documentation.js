import {ObjectStatus, IUser, IService} from "../index.mjs";

export interface IDocumentation {
  id: string,
  uniqRef?: string,
  slug?: string,
  authorID: string,
  author?: IUser,
  serviceID: string,
  service?: IService
  organizationID: string,
  title: string,
  level: number,
  order: number,
  description: string,
  parentDocumentationID: string,
  parentDocumentation?: IDocumentation,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type DocumentationInput = {
  documentationID: string,
  authorID?: string,
  serviceID?: string,
  organizationID?: string,
  title?: string,
  level?: number,
  order?: number,
  description?: string,
  parentDocumentationID?: string,
  state?: ObjectStatus,
}

