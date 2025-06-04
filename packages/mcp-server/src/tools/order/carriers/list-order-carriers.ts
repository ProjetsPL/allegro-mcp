// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.carriers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/carriers',
  operationId: 'getOrdersCarriersUsingGET',
};

export const tool: Tool = {
  name: 'list_order_carriers',
  description:
    'Shipping carriers are essential to provide accurate tracking experience for customers. Use this resource to get a list of all available shipping carriers.\n\nThe response of this resource can be stored in accordance with returned caching headers. Read more: <a href="../../news/nowy-zasob-do-pobrania-identyfikatorow-przewoznikow-8dmljjGRGUE" target="_blank">PL</a> / <a href="../../news/new-resource-to-retrieve-available-delivery-company-id-VL6zDDdr4hk" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return client.order.carriers.list();
};

export default { metadata, tool, handler };
