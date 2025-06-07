// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/orders/{orderId}/parcels',
  operationId: 'getFulfillmentOrderParcels',
};

export const tool: Tool = {
  name: 'get_parcels_fulfillment_orders',
  description:
    'Use this resource to get list of parcels and included items for a given order. Items include detailed information such as expiration dates and serial numbers. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-obslugiwac-zamowienia" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-handle-orders" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { orderId, ...body } = args as any;
  return asTextContentResult(await client.fulfillment.orders.getParcels(orderId));
};

export default { metadata, tool, handler };
