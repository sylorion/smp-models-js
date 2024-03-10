import {ObjectStatus, ServicesAcceptedDevice, NotificationFrequencyPref} from "../index.mjs";

export interface UserPreferences {
  preferenceID: string,
  uniqRef: string,
  slug: string,
  userID: string,
  lang: string,
  timeZone: string,
  notificationPreferences: JSON,
  privacySettings: JSON,
  theme: number,
  marketplaceConfig: JSON,
  defaultCurrency: ServicesAcceptedDevice,
  defaultPaymentMethodID: string,
  notificationFrequency: NotificationFrequencyPref,
  showRecommendations: boolean,
  otherSettings: JSON,
  state: ObjectStatus,
  createdAt: Date,
  updatedAt?: Date,
  deletedAt?: Date,
}

