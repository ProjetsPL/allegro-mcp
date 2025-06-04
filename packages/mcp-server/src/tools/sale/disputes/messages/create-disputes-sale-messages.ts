// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.disputes.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/disputes/{disputeId}/messages',
  operationId: 'addMessageToDisputeUsingPOST',
};

export const tool: Tool = {
  name: 'create_disputes_sale_messages',
  description:
    'Use this resource to post a message in certain dispute. At least one of fields: \'text\', \'attachment\' has to be present. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#nowa-wiadomosc-w-dyskusji" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#add-a-new-message-in-the-discussion" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      disputeId: {
        type: 'string',
      },
      attachment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: ['id'],
      },
      text: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['REGULAR', 'END_REQUEST'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { disputeId, ...body } = args as any;
  return client.sale.disputes.messages.create(disputeId, body);
};

export default { metadata, tool, handler };
