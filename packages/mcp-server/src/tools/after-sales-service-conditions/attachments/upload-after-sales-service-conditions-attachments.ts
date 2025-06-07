// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/after-sales-service-conditions/attachments/{attachmentId}',
  operationId: 'uploadAfterSalesServiceConditionsAttachmentUsingPUT',
};

export const tool: Tool = {
  name: 'upload_after_sales_service_conditions_attachments',
  description:
    'Upload an after sale services attachment.\nThis operation should be used after creating an offer attachment with *POST /sale/offer-attachments*\n**Important!** You can find the URL address to upload the file to our server in the *Location* response header of *POST /after-sales-service-conditions/attachments*. The URL is unique and one-time. As its format may change in time, you should always use the address from the header. Do not compose the address on your own. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-zalacznik-do-informacji-o-gwarancjach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-attachment-to-warranty-information" target="_blank">EN</a>.',
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
  return asTextContentResult(await client.afterSalesServiceConditions.attachments.upload(attachmentId, body));
};

export default { metadata, tool, handler };
