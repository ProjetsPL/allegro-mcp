// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'billing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/billing/billing-types',
  operationId: 'getBillingTypes',
};

export const tool: Tool = {
  name: 'list_billing_types_billing',
  description:
    'List of all billing types. Type names are localized according to "Accept-Language" header. Read more: <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#historia-operacji-billingowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#billing-operations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      'Accept-Language': {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.billing.listBillingTypes(body);
};

export default { metadata, tool, handler };
