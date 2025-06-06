// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.refund_claims',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/order/refund-claims',
  operationId: 'createRefundApplication',
};

export const tool: Tool = {
  name: 'create_order_refund_claims',
  description:
    'Use this resource to create a refund application. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-utworzyc-wniosek-o-rabat-transakcyjny" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-create-a-sale-commission-refund-application" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      lineItem: {
        type: 'object',
        description: 'Purchase for which a refund application will be created.',
        properties: {
          id: {
            type: 'string',
            description: 'ID of the purchase for which a refund application will be created.',
          },
        },
        required: [],
      },
      quantity: {
        type: 'integer',
        description:
          'Quantity of product for which the refund application will be created. Must be greater than zero.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.order.refundClaims.create(body));
};

export default { metadata, tool, handler };
