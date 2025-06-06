// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.customer_returns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/customer-returns',
  operationId: 'getCustomerReturns',
};

export const tool: Tool = {
  name: 'list_order_customer_returns',
  description:
    'Use this resource to get all customer returns filtered by query parameters. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-liste-zwrotow" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-customer-returns-list" target="_blank">EN</a>. This resource is limited to 25 requests per second for a single user and 50 requests per second for clientId.',
  inputSchema: {
    type: 'object',
    properties: {
      buyer: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'One or more buyer emails.',
          },
          login: {
            type: 'string',
            description: 'One or more buyer logins.',
          },
        },
        required: [],
      },
      createdAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description: 'Date of the return in ISO 8601 format to search by greater or equal.',
          },
          lte: {
            type: 'string',
            description: 'Date of the return in ISO 8601 format to search by lower or equal.',
          },
        },
        required: [],
      },
      customerReturnId: {
        type: 'string',
        description: "One or more customer return id's.",
      },
      from: {
        type: 'string',
        description:
          'The ID of the last seen customer return. Customer returns created after the given customer return will be returned.',
      },
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'One or more item names.',
          },
          offerId: {
            type: 'string',
            description: "One or more returned item offer id's.",
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'Limit of customer returns per page.',
      },
      marketplaceId: {
        type: 'string',
        description:
          'The marketplace ID where operation was made. When the parameter is omitted, searches for operations with all marketplaces.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
      orderId: {
        type: 'string',
        description: "One or more order id's.",
      },
      parcels: {
        type: 'object',
        properties: {
          carrierId: {
            type: 'string',
            description: "One or more carrier id's.",
          },
          sender: {
            type: 'string',
            description: 'One or more phone numbers.',
          },
          transportingCarrierId: {
            type: 'string',
            description:
              "Carrier id of a carrier physically transporting the parcel. Will be null if there's only one carrier involved in a parcel shipment.",
          },
          transportingWaybill: {
            type: 'string',
            description:
              "Waybill ids as generated by carriers physically transporting the parcel. Will be null if there's only one carrier involved in a parcel shipment.",
          },
          waybill: {
            type: 'string',
            description: "One or more waybill id's.",
          },
        },
        required: [],
      },
      referenceNumber: {
        type: 'string',
        description: 'One or more reference numbers.',
      },
      status: {
        type: 'string',
        description:
          'Current return timeline statuses. The allowed values are:\n  * CREATED\n  * DISPATCHED\n  * IN_TRANSIT\n  * DELIVERED\n  * FINISHED\n  * FINISHED_APT\n  * REJECTED\n  * COMMISSION_REFUND_CLAIMED\n  * COMMISSION_REFUNDED\n  * WAREHOUSE_DELIVERED\n  * WAREHOUSE_VERIFICATION.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.order.customerReturns.list(body);
};

export default { metadata, tool, handler };
