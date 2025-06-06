// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/categories',
  operationId: 'getCategoriesUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_categories',
  description:
    'Use this resource to traverse the Allegro categories tree. It returns the list of the given category\'s children or a list of the main Allegro categories. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#uzupelnij-kategorie-i-parametry" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#provide-category-and-parameters" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      parent: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'The ID of the category which children should be returned. If omitted, the list of main Allegro categories will be returned.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.categories.list(body));
};

export default { metadata, tool, handler };
