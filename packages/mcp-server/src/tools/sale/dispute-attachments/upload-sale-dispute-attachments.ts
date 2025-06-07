// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.dispute_attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/dispute-attachments/{attachmentId}',
  operationId: 'uploadDisputeAttachmentUsingPUT',
};

export const tool: Tool = {
  name: 'upload_sale_dispute_attachments',
  description:
    'Upload a dispute message attachment.\nThis operation should be used after creating an attachment declaration with *POST /sale/dispute-attachments*\n**Important!** You can find the URL address to upload the file to our server in the *Location* response header of *POST /sale/dispute-attachments*. The URL is unique and one-time. As its format may change in time, you should always use the address from the header. Do not compose the address on your own. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#dodanie-zalacznika" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#adding-an-attachment" target="_blank">EN</a>.',
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
  await client.sale.disputeAttachments.upload(attachmentId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
