// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.tax_id',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/fulfillment/tax-id',
  operationId: 'addTaxId',
};

export const tool: Tool = {
  name: 'add_fulfillment_tax_id',
  description: 'Use this resource to add tax identification number. For international sellers only.',
  inputSchema: {
    type: 'object',
    properties: {
      taxId: {
        type: 'string',
        description: "User's tax identification number.",
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.fulfillment.taxID.add(body);
};

export default { metadata, tool, handler };
