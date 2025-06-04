// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/products/{productId}',
  operationId: 'getSaleProduct',
};

export const tool: Tool = {
  name: 'retrieve_sale_products',
  description:
    'Use this resource to retrieve all data of the particular product. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-pobrac-pelne-dane-o-produkcie" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-retrieve-product-data" target="_blank">EN</a>. This resource is limited with <a href="../../tutorials/basic-information-VL6YelvVKTn#limiting-the-number-of-queries-limits" target="_blank">Leaky Bucket</a> mechanism.',
  inputSchema: {
    type: 'object',
    properties: {
      productId: {
        type: 'string',
      },
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              "The similar category identifier. You can choose a category from 'similar categories' to filter the list of parameters available in the category context.",
          },
        },
        required: [],
      },
      includeDrafts: {
        type: 'boolean',
        description: 'Return also if product is in draft state.',
      },
      language: {
        type: 'string',
        description:
          'The language version of product. You can indicate the language for the returned product data.',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { productId, ...body } = args as any;
  return client.sale.products.retrieve(productId, body);
};

export default { metadata, tool, handler };
