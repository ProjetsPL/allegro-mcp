// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.tax_id',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/tax-id',
  operationId: 'getTaxId',
};

export const tool: Tool = {
  name: 'get_fulfillment_tax_id',
  description:
    'Use this resource to get tax identification number with verification status. After adding or updating the tax identification number the status will be NOT_VERIFIED and you will have to wait for acceptance status to start selling.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return client.fulfillment.taxID.get();
};

export default { metadata, tool, handler };
