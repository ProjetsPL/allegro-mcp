// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'payments.refunds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payments/refunds',
  operationId: 'getRefundedPayments',
};

export const tool: Tool = {
  name: 'list_payments_refunds',
  description:
    'Get a list of refunded payments. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-liste-zwrotow-platnosci" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-a-list-of-refunded-payment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the refund.',
      },
      limit: {
        type: 'integer',
        description: 'Number of returned operations.',
      },
      occurredAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description: 'Minimum date and time when the refund occurred provided in ISO 8601 format.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description: 'Maximum date and time when the refund occurred provided in ISO 8601 format.',
            format: 'date-time',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'Index of the first returned payment operation from all search results.',
      },
      payment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID of the payment.',
          },
        },
        required: [],
      },
      status: {
        type: 'array',
        description: 'Current status of payment refund.',
        items: {
          type: 'string',
          enum: ['WAITING', 'IN_PROGRESS', 'SUCCESS', 'CANCELED', 'PARTIAL'],
        },
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payments.refunds.list(body));
};

export default { metadata, tool, handler };
