// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.message_attachments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging/message-attachments/{attachmentId}',
  operationId: 'downloadAttachmentGET',
};

export const tool: Tool = {
  name: 'download_messaging_message_attachments',
  description:
    'Use this resource to download attachment with provided identifier. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#pobranie-zalacznika" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#attachment-related-to-the-message" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      attachmentId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { attachmentId, ...body } = args as any;
  return asBinaryContentResult(await client.messaging.messageAttachments.download(attachmentId));
};

export default { metadata, tool, handler };
