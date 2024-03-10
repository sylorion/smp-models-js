import {ObjectStatus, ServiceSupplyForm,
  ServiceUptakeType, ServiceBillingPlan,
  IUser, ServiceAttributeInput} from "../index.mjs";
export interface IService {
  id: string,
  uniqRef: string,
  slug: string,
  authorID: string,
  author: IUser,
  title: string,
  description: string,
  mediaBannerID: string,
  termsAndConditionsID: string,
  parentServiceID: string,
  parent?: IService
  topicID: string,
  organizationID: string,
  locationID: string,
  paymentConfigID: string,
  price: number,
  legalVatPercent: number,
  lowerPrice: number,
  upperPrice: number,
  negotiable: boolean,
  perimeter: number,
  supplyType: ServiceSupplyForm
  uptakeForm: ServiceUptakeType
  billingPlan: ServiceBillingPlan
  onlineService: boolean,
  advancedAttributes: string,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
}

export type ServiceInput = {
  serviceID: string,
  title?: string,
  description?: string,
  mediaBannerID?: string,
  termsAndConditionsID?: string,
  parentServiceID?: string,
  topicID?: string,
  organizationID?: string,
  locationID?: string,
  paymentConfigID?: string,
  price?: number,
  legalVatPercent?: number,
  lowerPrice?: number,
  upperPrice?: number,
  negotiable?: boolean,
  perimeter?: number,
  attributes?: [ServiceAttributeInput]
  supplyType?: ServiceSupplyForm
  uptakeForm?: ServiceUptakeType
  billingPlan?: ServiceBillingPlan
  onlineService?: boolean,
  advancedAttributes?: JSON,
  state?: ObjectStatus,
}

