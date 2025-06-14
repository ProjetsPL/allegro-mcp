// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payments/payment-operations',
  operationId: 'getPaymentsOperationHistory',
};

export const tool: Tool = {
  name: 'list_operations_payments',
  description:
    'Use this endpoint to get the list of the seller payment operations. Read more: <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#historia-operacji-platniczych" target="_blank">PL</a> / <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#payment-operations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        description: 'Currency of the operations.',
      },
      group: {
        type: 'array',
        description:
          'Group of operation types: * INCOME - CONTRIBUTION, SURCHARGE, CORRECTION, DEDUCTION_INCREASE, COMPENSATION. * OUTCOME - PAYOUT, PAYOUT_CANCEL, DEDUCTION_CHARGE. * REFUND - REFUND_CHARGE, REFUND_CANCEL, REFUND_INCREASE, CORRECTION, PROVIDER_REFUND_TRANSFER_CHARGE, PROVIDER_REFUND_TRANSFER_INCREASE. * BLOCKADES - BLOCKADE, BLOCKADE_RELEASE.',
        items: {
          type: 'string',
          enum: ['INCOME', 'OUTCOME', 'REFUND', 'BLOCKADES'],
        },
      },
      limit: {
        type: 'integer',
        description: 'Number of returned operations.',
      },
      marketplaceId: {
        type: 'string',
        description:
          'The marketplace ID where operation was made. When the parameter is omitted, searches for operations with all marketplaces. Note, that there are operations not assigned to any marketplace.',
        enum: ['allegro-pl', 'allegro-cz'],
      },
      occurredAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description: 'The minimum date and time of operation occurrence in ISO 8601 format.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description: 'The maximum date and time of operation occurrence in ISO 8601 format.',
            format: 'date-time',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'Index of the first returned payment operation from all search results.',
      },
      participant: {
        type: 'object',
        properties: {
          login: {
            type: 'string',
            description:
              'Login of the participant. In case of REFUND_INCREASE operation this is the login of the seller, in other cases, of the buyer.',
          },
        },
        required: [],
      },
      payment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The payment ID.',
          },
        },
        required: [],
      },
      wallet: {
        type: 'object',
        properties: {
          paymentOperator: {
            type: 'string',
            description:
              'Payment operator: * PAYU - operations processed by PAYU operator. * P24 - operations processed by PRZELEWY24 operator. * AF - operations processed by Allegro Finance operator. * AF_P24 - operations processed by Allegro Finance with PRZELEWY24. * AF_PAYU - operations processed by Allegro Finance with PAYU.',
            enum: ['PAYU', 'P24', 'AF', 'AF_P24', 'AF_PAYU'],
          },
          type: {
            type: 'string',
            description:
              'Type of the wallet: * AVAILABLE - operations available for payout. * WAITING - operations temporarily suspended for payout.',
            enum: ['AVAILABLE', 'WAITING'],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payments.listOperations(body));
};

export default { metadata, tool, handler };
