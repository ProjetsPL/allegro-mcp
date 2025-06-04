// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/messaging/messages/{messageId}',
  operationId: 'deleteMessageDELETE',
};

export const tool: Tool = {
  name: 'delete_messaging_messages',
  description:
    'Use this resource to delete message with provided identifier. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#usuniecie-wiadomosci" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#delete-a-message" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      messageId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { messageId, ...body } = args as any;
  return client.messaging.messages.delete(messageId);
};

export default { metadata, tool, handler };
