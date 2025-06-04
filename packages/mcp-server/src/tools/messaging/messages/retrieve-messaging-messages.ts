// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging/messages/{messageId}',
  operationId: 'getMessageGET',
};

export const tool: Tool = {
  name: 'retrieve_messaging_messages',
  description:
    'Use this resource to get message with provided identifier. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#szczegolowe-informacje-o-wiadomosci" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#information-about-a-particular-message" target="_blank">EN</a>.',
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
  return client.messaging.messages.retrieve(messageId);
};

export default { metadata, tool, handler };
