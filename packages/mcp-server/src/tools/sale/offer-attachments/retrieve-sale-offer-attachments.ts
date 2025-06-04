// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_attachments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-attachments/{attachmentId}',
  operationId: 'getOfferAttachment',
};

export const tool: Tool = {
  name: 'retrieve_sale_offer_attachments',
  description:
    'Get details of an offer attachments, including download link, by attachment identifier ("attachmentId"). The attachment id can be retrieved by querying a particular offer, for example by using <a href="#operation/getProductOffer">`GET /sale/product-offers/{offerId}`</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      attachmentId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { attachmentId, ...body } = args as any;
  return client.sale.offerAttachments.retrieve(attachmentId);
};

export default { metadata, tool, handler };
