// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.threads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging/threads/{threadId}',
  operationId: 'getThreadGET',
};

export const tool: Tool = {
  name: 'retrieve_messaging_threads',
  description:
    'Use this resource to get thread with provided identifier. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#szczegolowe-informacje-o-danym-watku" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#information-about-a-particular-thread" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      threadId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { threadId, ...body } = args as any;
  return client.messaging.threads.retrieve(threadId);
};

export default { metadata, tool, handler };
