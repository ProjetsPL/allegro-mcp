// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.threads.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging/threads/{threadId}/messages',
  operationId: 'newMessageInThreadPOST',
};

export const tool: Tool = {
  name: 'create_threads_messaging_messages',
  description:
    'Use this resource to write new message in existing thread. This resource is rate limited to 1 request per second for a user. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#nowa-wiadomosc" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#add-a-new-message" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      threadId: {
        type: 'string',
      },
      text: {
        type: 'string',
      },
      attachments: {
        type: 'array',
        items: {
          $ref: '#/$defs/message_attachment_id',
        },
      },
    },
    $defs: {
      message_attachment_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { threadId, ...body } = args as any;
  return asTextContentResult(await client.messaging.threads.messages.create(threadId, body));
};

export default { metadata, tool, handler };
