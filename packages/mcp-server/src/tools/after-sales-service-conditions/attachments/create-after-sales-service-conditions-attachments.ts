// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/after-sales-service-conditions/attachments',
  operationId: 'createAfterSalesServiceConditionsAttachmentUsingPOST',
};

export const tool: Tool = {
  name: 'create_after_sales_service_conditions_attachments',
  description:
    'You can attach PDF files to warranties.\nUploading attachments flow:\n  1. Create an attachment object to receive an upload URL (*POST /after-sales-service-conditions/attachments*),\n  2. Use the upload URL to submit the PDF file (*PUT /after-sales-service-conditions/attachments/{attachmentId}*),\n  3. Create (or update) warranty with attachment (*POST /after-sales-service-conditions/warranties*).\n\n  Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-zalacznik-do-informacji-o-gwarancjach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-attachment-to-warranty-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.afterSalesServiceConditions.attachments.create(body);
};

export default { metadata, tool, handler };
