// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.refund_claims',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/order/refund-claims/{claimId}',
  operationId: 'cancelRefundApplication',
};

export const tool: Tool = {
  name: 'cancel_order_refund_claims',
  description:
    'Use this resource to cancel a refund application. This cannot be undone. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-anulowac-wniosek-o-rabat-transakcyjny" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-cancel-sale-commission-refund" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      claimId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { claimId, ...body } = args as any;
  return client.order.refundClaims.cancel(claimId);
};

export default { metadata, tool, handler };
