// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'messaging.message_attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging/message-attachments',
  operationId: 'newAttachmentDeclarationPOST',
};

export const tool: Tool = {
  name: 'create_messaging_message_attachments',
  description:
    'Use this resource to add attachment declaration before uploading. Read more: <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#deklaracja-zalacznika" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#attachment-declaration" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      filename: {
        type: 'string',
      },
      size: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.messaging.messageAttachments.create(body);
};

export default { metadata, tool, handler };
