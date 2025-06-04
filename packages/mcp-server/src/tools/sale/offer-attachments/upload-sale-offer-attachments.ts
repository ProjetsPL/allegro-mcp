// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-attachments/{attachmentId}',
  operationId: 'uploadOfferAttachmentUsingPUT',
};

export const tool: Tool = {
  name: 'upload_sale_offer_attachments',
  description:
    'Upload an offer attachment.\nThis operation should be used after creating an offer attachment with *POST /sale/offer-attachments*\n**Important!** You can find the URL address to upload the file to our server in the *Location* response header of *POST /sale/offer-attachments*. The URL is unique and one-time. As its format may change in time, you should always use the address from the header. Do not compose the address on your own. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#zalaczniki" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#attachments" target="_blank">EN</a>.',
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

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { attachmentId, ...body } = args as any;
  return client.sale.offerAttachments.upload(attachmentId, body);
};

export default { metadata, tool, handler };
