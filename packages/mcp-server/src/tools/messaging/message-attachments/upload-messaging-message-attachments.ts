// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.message_attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/messaging/message-attachments/{attachmentId}',
  operationId: 'uploadAttachmentPUT',
};

export const tool: Tool = {
  name: 'upload_messaging_message_attachments',
  description:
    'Use this resource to upload attachment using identifier that was declared. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#dodanie-zalacznika" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#add-an-attachment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      attachmentId: {
        type: 'string',
      },
      body: {
        type: 'string',
        description: 'File in a binary format',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { attachmentId, ...body } = args as any;
  return asTextContentResult(await client.messaging.messageAttachments.upload(attachmentId, body));
};

export default { metadata, tool, handler };
