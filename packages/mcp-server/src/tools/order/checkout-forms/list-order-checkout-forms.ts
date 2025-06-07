// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.checkout_forms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/checkout-forms',
  operationId: 'getListOfOrdersUsingGET',
};

export const tool: Tool = {
  name: 'list_order_checkout_forms',
  description:
    'Use this resource to get an order list. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#lista-zamowien" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#order-list" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      buyer: {
        type: 'object',
        properties: {
          login: {
            type: 'string',
            description: 'Find checkout-forms having specified buyer login.',
          },
        },
        required: [],
      },
      delivery: {
        type: 'object',
        properties: {
          method: {
            type: 'string',
            description: 'Find checkout-forms having specified delivery method id.',
          },
        },
        required: [],
      },
      fulfillment: {
        type: 'object',
        properties: {
          shipmentSummary: {
            type: 'string',
            description:
              'Specify filter for line items sending status. Allowed values are:\n  * `NONE`: none of line items have tracking number specified\n  * `SOME`: some of line items have tracking number specified\n  * `ALL`: all of line items have tracking number specified.',
          },
          status: {
            type: 'string',
            description:
              'Specify seller status value that checkout-forms must have to be included in the output. Allowed values are:\n  * `NEW`\n  * `PROCESSING`\n  * `READY_FOR_SHIPMENT`\n  * `READY_FOR_PICKUP`\n  * `SENT`\n  * `PICKED_UP`\n  * `CANCELLED`\n  * `SUSPENDED`\n  * `RETURNED`.',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of checkout-forms in response.',
      },
      lineItems: {
        type: 'object',
        properties: {
          boughtAt: {
            type: 'string',
            description:
              'Latest line item bought date. The lower bound of date time range from which checkout forms will be taken.',
            format: 'date-time',
          },
        },
        required: [],
      },
      marketplace: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Find checkout-forms of orders purchased on specified marketplace.',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'Index of first returned checkout-form from all search results.',
      },
      payment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Find checkout-forms having specified payment id.',
          },
        },
        required: [],
      },
      sort: {
        type: 'string',
        description:
          "The results' sorting order. No prefix in the value means ascending order. `-` prefix means descending order. If you don't provide the sort parameter, the list is sorted by line item boughtAt date, descending.",
        enum: ['lineItems.boughtAt', '-lineItems.boughtAt', 'updatedAt', '-updatedAt'],
      },
      status: {
        type: 'string',
        description:
          'Specify status value that checkout-forms must have to be included in the output. Allowed values are:\n  * `BOUGHT`: purchase without checkout form filled in.\n  * `FILLED_IN`: checkout form filled in but payment is not completed yet so data could still change.\n  * `READY_FOR_PROCESSING`: payment completed. Purchase is ready for processing.\n  * `CANCELLED`: purchase cancelled by buyer.',
      },
      surcharges: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Find checkout-forms having specified surcharge id.',
          },
        },
        required: [],
      },
      updatedAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description:
              'Checkout form last modification date. The lower bound of date time range from which checkout forms will be taken.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description:
              'Checkout form last modification date. The upper bound of date time range from which checkout forms will be taken.',
            format: 'date-time',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.order.checkoutForms.list(body));
};

export default { metadata, tool, handler };
