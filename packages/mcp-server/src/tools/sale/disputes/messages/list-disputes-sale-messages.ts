// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.disputes.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/disputes/{disputeId}/messages',
  operationId: 'getMessagesFromDisputeUsingGET',
};

export const tool: Tool = {
  name: 'list_disputes_sale_messages',
  description:
    'Use this resource to get the list of messages within dispute. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#wiadomosci-z-dyskusji" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#all-messages-within-a-discussion" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      disputeId: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of messages within dispute returned in a response.',
      },
      offset: {
        type: 'integer',
        description: 'Index of first returned message within dispute.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { disputeId, ...body } = args as any;
  return client.sale.disputes.messages.list(disputeId, body);
};

export default { metadata, tool, handler };
