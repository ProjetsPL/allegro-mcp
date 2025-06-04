// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/categories/{categoryId}/product-parameters',
  operationId: 'getFlatProductParametersUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_product_parameters_sale_categories',
  description:
    'Use this resource to get the list of product parameters available in given category. You can use these parameters to create a new product. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-utworzyc-nowy-produkt" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-create-a-product" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      categoryId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { categoryId, ...body } = args as any;
  return client.sale.categories.retrieveProductParameters(categoryId);
};

export default { metadata, tool, handler };
