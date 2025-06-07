// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.refund_claims',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/refund-claims',
  operationId: 'getRefundApplications',
};

export const tool: Tool = {
  name: 'list_order_refund_claims',
  description:
    'Use this resource to get a list of refund applications based on the provided query parameters. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-liste-utworzonych-wnioskow-o-rabat-transakcyjny" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-list-of-sale-commission-refunds" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      buyer: {
        type: 'object',
        properties: {
          login: {
            type: 'string',
            description: 'Login of the buyer that made the purchase associated with the refund application.',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of returned refund applications in response.',
      },
      lineItem: {
        type: 'object',
        properties: {
          offer: {
            type: 'string',
            description: 'ID of the offer associated with the refund application.',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'Index of the first returned refund application from all search results.',
      },
      status: {
        type: 'string',
        description: 'Status of the refund application.',
        enum: [
          'IN_PROGRESS',
          'WAITING_FOR_PAYMENT_REFUND',
          'GRANTED',
          'REJECTED',
          'REJECTED_AFTER_APPEAL',
          'CANCELLED',
          'APPEALED',
        ],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.order.refundClaims.list(body));
};

export default { metadata, tool, handler };
