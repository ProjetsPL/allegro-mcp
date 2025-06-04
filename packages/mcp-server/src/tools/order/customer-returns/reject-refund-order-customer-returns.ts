// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.customer_returns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/order/customer-returns/{customerReturnId}/rejection',
  operationId: 'rejectCustomerReturnRefund',
};

export const tool: Tool = {
  name: 'reject_refund_order_customer_returns',
  description:
    'Use this resource to reject customer return refund with provided reason. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-odmowic-zwrotu-wplaty" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-reject-customer-return-refund" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      customerReturnId: {
        type: 'string',
      },
      rejection: {
        type: 'object',
        description: 'Refund rejection',
        properties: {
          code: {
            type: 'string',
            description: 'Refund rejection code',
            enum: ['REFUND_REJECTED', 'NEW_ITEM_SENT', 'ITEM_FIXED', 'MISSING_PART_SENT'],
          },
          reason: {
            type: 'string',
            description: 'Refund rejection reason, required when code is REFUND_REJECTED',
          },
        },
        required: ['code'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { customerReturnId, ...body } = args as any;
  return client.order.customerReturns.rejectRefund(customerReturnId, body);
};

export default { metadata, tool, handler };
