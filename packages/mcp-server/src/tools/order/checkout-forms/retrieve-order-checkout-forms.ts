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
  httpPath: '/order/checkout-forms/{id}',
  operationId: 'getOrdersDetailsUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_order_checkout_forms',
  description:
    'Use this resource to get an order details. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#szczegoly-zamowienia" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#order-details" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.checkoutForms.retrieve(id));
};

export default { metadata, tool, handler };
