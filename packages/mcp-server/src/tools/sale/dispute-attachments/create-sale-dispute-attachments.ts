// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.dispute_attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/dispute-attachments',
  operationId: 'createAnAttachmentUsingPOST',
};

export const tool: Tool = {
  name: 'create_sale_dispute_attachments',
  description:
    'Use this resource to post an attachment declaration. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#deklaracja-zalacznika" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#attachment-declaration" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      fileName: {
        type: 'string',
      },
      size: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.disputeAttachments.create(body));
};

export default { metadata, tool, handler };
