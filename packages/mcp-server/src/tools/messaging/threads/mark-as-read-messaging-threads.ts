// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.threads',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/messaging/threads/{threadId}/read',
  operationId: 'changeReadFlagOnThreadPUT',
};

export const tool: Tool = {
  name: 'mark_as_read_messaging_threads',
  description:
    'Use this resource to mark thread with provided identifier as read. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#szczegolowe-informacje-o-wiadomosci" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#information-about-a-particular-message" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      threadId: {
        type: 'string',
      },
      read: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { threadId, ...body } = args as any;
  return asTextContentResult(await client.messaging.threads.markAsRead(threadId, body));
};

export default { metadata, tool, handler };
