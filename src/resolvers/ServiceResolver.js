import { PubSub } from "graphql-subscriptions";
import { IService, ServiceInput } from "../index.mjs";
// import {info} from "firebase-functions/logger";
// import { messaging } from 'firebase-admin'
import admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// import {onDocumentCreated} from "firebase-functions/v2/firestore";
// import {Graph} from "redis";

// import {Service} from "../../models.js";
const pubsub = new PubSub();

const SERVICE_ADDED = "SERVICE_ADDED";
const SERVICE_UPDATED = "SERVICE_UPDATED";
const SERVICE_DELETED = "SERVICE_DELETED";

const ServiceResolvers = {
  Query: {
    cataHello: async () => "Services Catalog V0.0.1",
    cataVersion: async () => "V0.0.1",
    service: async (parent: any, { serviceID }, context:any, info:any) => {
      if (serviceID && serviceID !== "") {
        try {
          const service = db.collection('services').doc(serviceID);

          if (service) {
            return service;
          } else {
            const msgErr =
              "Error fetching service id: " + serviceID + " No data found";
            context.logger.error(msgErr);
            throw new Error(msgErr + "001");
          }
        } catch (error) {
          const retErr = "Query::Error fetching Service  : " + error;
          context.logger.error(retErr);
          throw error;
        }
      } else {
        const msgErr = "Service ID not provided " + serviceID;
        context.logger.error(msgErr);
        throw new Error(msgErr + "002");
      }
    },
    // services: async (_, _, context) => {
    //   context.logger.infos(`Service listtings details `);
    // },
    // serviceByIDs: serviceByIDs,
  },
  Mutation: {
    // deleteService: async (_, { serviceID }, context) => {
    //   context.logger.infos(`Service ID ${serviceID} deleting details`);
    // },

    // updateService: async (_, { serviceID }, context) => {
    //   context.logger.infos(`Service ID ${serviceID} updating details`);
    // },
    // createService: async (_, _, context) => {
    //   context.logger.infos(`Service new creation details`);
    // },
  },

  Subscription: {
    serviceAdded: {
      subscribe: () => pubsub.asyncIterator([SERVICE_ADDED]),
    },
    serviceUpdated: {
      subscribe: () => pubsub.asyncIterator([SERVICE_UPDATED]),
    },
    serviceDeleted: {
      subscribe: () => pubsub.asyncIterator([SERVICE_DELETED]),
    },
  },
};

export default ServiceResolvers;
