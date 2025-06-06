// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.classifieds_packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/classifieds-packages',
  operationId: 'getClassifiedPackageConfigurationsForCategoryUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_classifieds_packages',
  description:
    'Use this resource to retrieve configurations of classifieds packages for a category. Read more: <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#lista-pakietow-i-opcji-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#list-of-promo-options" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The category ID.',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.classifiedsPackages.list(body));
};

export default { metadata, tool, handler };
