import {ObjectStatus} from "../index.mjs";


export interface IServiceAsset {
  id: string,
  uniqRef: string,
  slug: string,
  assetID: string,
  serviceID: string,
  legend: string,
  authorID: string,
  listingPosition: number,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type ServiceAssetInput = {
  serviceAssetID: string,
  authorID?: string,
  assetID?: string,
  serviceID?: string,
  legend?: string,
  listingPosition?: number,
  state?: ObjectStatus,
}
