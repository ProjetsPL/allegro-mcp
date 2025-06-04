// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.threads.messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging/threads/{threadId}/messages',
  operationId: 'listMessagesGET',
};

export const tool: Tool = {
  name: 'list_threads_messaging_messages',
  description:
    'Use this resource to list messages in thread with provided identifier. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#lista-wiadomosci-dla-wybranego-watku" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#list-of-the-messages-for-the-particular-thread" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      threadId: {
        type: 'string',
      },
      after: {
        type: 'string',
        description: 'Message creation date after filter parameter (exclusive).',
        format: 'date-time',
      },
      before: {
        type: 'string',
        description:
          'Message creation date before filter parameter (exclusive) - cannot be used with offset.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of messages returned in the response.',
      },
      offset: {
        type: 'integer',
        description: 'Index of the first returned message from all results.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { threadId, ...body } = args as any;
  return client.messaging.threads.messages.list(threadId, body);
};

export default { metadata, tool, handler };
