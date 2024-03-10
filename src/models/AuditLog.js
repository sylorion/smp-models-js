import {AuditLogActionType, ObjectStatus, IUser} from "../index.mjs";

export interface IAuditLog<T extends object> {
  id: string,
  before?: T,
  after?: T,
  uniqRef: string,
  slug: string,
  actionType: AuditLogActionType,
  userID: string,
  user?: IUser
  userIP: string,
  userOS: string,
  machineName: string,
  applicationID?: string,
  applicationVersion?: string,
  actionDetails?: string,
  clientDetails?: string,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}
