// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.disputes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/disputes/{disputeId}',
  operationId: 'getDisputeUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_disputes',
  description:
    'Use this resource to get a single dispute. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#szczegolowe-informacje-o-dyskusji" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#information-about-a-particular-discussion" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      disputeId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { disputeId, ...body } = args as any;
  return client.sale.disputes.retrieve(disputeId);
};

export default { metadata, tool, handler };
