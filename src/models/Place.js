
import {ObjectStatus, PlaceKind, IMedia} from "../index.mjs";

export interface IPlace {
  placeID?: string
  uniqRef?: string,
  slug?: string,
  authorID?: string,
  countryName: string,
  regionName: string,
  stateName: string,
  cityName: string,
  postalCode: string,
  placeKind: PlaceKind
  addressLine1: string,
  addressLine2: string,
  coordinates: string,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

export type PlaceInput = {
  placeID: string,
  authorID?: string,
  media?: IMedia,
  countryName?: string,
  regionName?: string,
  stateName?: string,
  cityName?: string,
  postalCode?: string,
  placeKind?: PlaceKind
  addressLine1?: string,
  addressLine2?: string,
  coordinates?: string,
  state?: ObjectStatus,
}
