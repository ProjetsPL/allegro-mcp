// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.refund_claims',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/refund-claims/{claimId}',
  operationId: 'getRefundApplication',
};

export const tool: Tool = {
  name: 'retrieve_order_refund_claims',
  description:
    'Use this resource to get refund application details. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-pojedynczy-wniosek-o-rabat-transakcyjny" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-single-sale-commission-refund" target="_blank">EN</a>.',
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
  return client.order.refundClaims.retrieve(claimId);
};

export default { metadata, tool, handler };
