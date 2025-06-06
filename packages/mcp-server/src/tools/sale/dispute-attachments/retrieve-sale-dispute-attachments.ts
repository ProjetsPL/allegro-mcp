// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.dispute_attachments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/dispute-attachments/{attachmentId}',
  operationId: 'getAttachmentUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_dispute_attachments',
  description:
    'Use this resource to get an attachment. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#pobranie-zalacznika" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#attachment-related-to-the-discussion" target="_blank">EN</a>.',
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
  return asBinaryContentResult(await client.sale.disputeAttachments.retrieve(attachmentId));
};

export default { metadata, tool, handler };
