// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'billing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/billing/billing-entries',
  operationId: 'getBillingEntries',
};

export const tool: Tool = {
  name: 'list_billing_entries_billing',
  description:
    'The billing entries are sorted in a descending order (newest first) by date on which they occurred. Read more: <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#historia-operacji-billingowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#billing-operations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of returned operations.',
      },
      marketplaceId: {
        type: 'string',
        description:
          "The marketplace ID where operation was made. By default the marketplace ID where the user is registered. **Note:** Business marketplace is not a separate user's billing and defaults back to the main marketplace for given country.",
      },
      occurredAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description:
              'Date from which billing entries are filtered. If occurredAt.lte is also set, occurredAt.gte cannot be later.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description:
              'Date to which billing entries are filtered. If occurredAt.gte is also set, occurredAt.lte cannot be earlier.',
            format: 'date-time',
          },
        },
        required: [],
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Offer ID by which billing entries are filtered.',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'Index of the first returned payment operation from all search results.',
      },
      order: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Order UUID by which billing entries are filtered.',
          },
        },
        required: [],
      },
      type: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'List of billing types by which billing entries are filtered.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.billing.listBillingEntries(body);
};

export default { metadata, tool, handler };
