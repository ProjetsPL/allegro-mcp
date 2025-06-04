// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.product_offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/product-offers/{offerId}/parts',
  operationId: 'getPartialProductOffer',
};

export const tool: Tool = {
  name: 'retrieve_parts_sale_product_offers',
  description:
    'Use this resource to retrieve selected data of the particular product-offer. The model and functionality is a subset of the full product offer get endpoint (`GET /sale/product-offers/{offerId}`), but it is faster and more reliable.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      include: {
        type: 'array',
        description:
          'Selection of parts intended to retrieve. Multiple parts can be specified at the same time.',
        items: {
          type: 'string',
          enum: ['stock', 'price'],
        },
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.sale.productOffers.retrieveParts(offerId, body);
};

export default { metadata, tool, handler };
