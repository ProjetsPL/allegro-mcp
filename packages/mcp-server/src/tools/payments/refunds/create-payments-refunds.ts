// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'payments.refunds',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments/refunds',
  operationId: 'initiateRefund',
};

export const tool: Tool = {
  name: 'create_payments_refunds',
  description:
    'Use this endpoint to initiate a refund of a payment. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-wykonac-zwrot-platnosci" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-refund-a-payment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      payment: {
        $ref: '#/$defs/refund_payment',
      },
      reason: {
        type: 'string',
        description: 'Reason for a payment refund.',
        enum: [
          'REFUND',
          'COMPLAINT',
          'PRODUCT_NOT_AVAILABLE',
          'PAID_VALUE_TOO_LOW',
          'OVERPAID',
          'CANCELLED_BY_BUYER',
          'NOT_COLLECTED',
        ],
      },
      additionalServices: {
        type: 'object',
        description: 'Payment refund for additional services.',
        properties: {
          value: {
            $ref: '#/$defs/refund_additional_services_value',
          },
        },
        required: [],
      },
      delivery: {
        type: 'object',
        description: 'Payment refund for delivery.',
        properties: {
          value: {
            $ref: '#/$defs/refund_delivery_value',
          },
        },
        required: [],
      },
      lineItems: {
        type: 'array',
        description: "List of order's line items which can be refunded.",
        items: {
          $ref: '#/$defs/refund_line_item',
        },
      },
      overpaid: {
        type: 'object',
        description: 'Payment refund for overpaid.',
        properties: {
          value: {
            $ref: '#/$defs/refund_overpaid_value',
          },
        },
        required: [],
      },
      sellerComment: {
        type: 'string',
        description: 'Sellers optional justification for refund.',
      },
      surcharges: {
        type: 'array',
        description: 'List of surcharges for payment which can be refunded.',
        items: {
          $ref: '#/$defs/payments_surcharge',
        },
      },
    },
    $defs: {
      refund_payment: {
        type: 'object',
        title: 'RefundPayment',
        description: 'Payment affected by refund operation.',
        properties: {
          id: {
            type: 'string',
            description: 'The payment identifier.',
          },
        },
        required: [],
      },
      refund_additional_services_value: {
        allOf: [
          {
            $ref: '#/$defs/price',
          },
        ],
        title: 'MonetaryAmount',
        description: 'Additional services amount for payment refund.',
      },
      price: {
        type: 'object',
        description: 'The price data.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
          },
        },
        required: ['amount', 'currency'],
      },
      refund_delivery_value: {
        allOf: [
          {
            $ref: '#/$defs/price',
          },
        ],
        title: 'MonetaryAmount',
        description: 'Delivery amount for payment refund.',
      },
      refund_line_item: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The line-item identifier.',
          },
          type: {
            type: 'string',
            description:
              'Type for line items refund. QUANTITY is provided when you can refund one or more items. AMOUNT is provided when you can refund a partial price.',
            enum: ['AMOUNT', 'QUANTITY'],
          },
          quantity: {
            type: 'number',
            description:
              'This field is provided for QUANTITY type only. It specifies how many items will be refunded.',
          },
          value: {
            type: 'object',
            description:
              'This field is available for AMOUNT type only and specifies the amount refunded to the customer.',
            properties: {
              amount: {
                type: 'string',
                description: 'The amount provided in a string format to avoid rounding errors.',
              },
              currency: {
                type: 'string',
                description:
                  'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
              },
            },
            required: ['amount', 'currency'],
          },
        },
        required: ['id', 'type'],
      },
      refund_overpaid_value: {
        allOf: [
          {
            $ref: '#/$defs/price',
          },
        ],
        title: 'MonetaryAmount',
        description: 'Overpaid amount for payment refund.',
      },
      payments_surcharge: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The payment identifier.',
          },
          value: {
            allOf: [
              {
                $ref: '#/$defs/price',
              },
            ],
            title: 'MonetaryAmount',
            description: 'Surcharge refund amount.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.payments.refunds.create(body));
};

export default { metadata, tool, handler };
