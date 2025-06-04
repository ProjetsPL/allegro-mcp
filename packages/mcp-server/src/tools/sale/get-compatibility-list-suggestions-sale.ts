// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/compatibility-list-suggestions',
  operationId: 'getCompatibilityListSuggestion',
};

export const tool: Tool = {
  name: 'get_compatibility_list_suggestions_sale',
  description:
    'Resource allows to fetch compatibility list suggestion for given offer or product. Read more: <a href="../../tutorials/jak-zarzadzac-sekcja-pasuje-do-E7Zj6gAEGil#jak-wyszukac-sugerowana-sekcje-compatibilitylist" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-compatibility-section-v8WbL1wV0Hz#how-to-search-for-the-suggested-compatibility-section" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      language: {
        type: 'string',
        description:
          'Locale on the basis of which we will return the suggested compatibility list. For product-based suggestions if missing pl-PL will be used. For offer-based suggestions if missing offer language will be used.',
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Offer id on the basis of which we will return the suggested compatibility list.',
          },
        },
        required: [],
      },
      product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Product id on the basis of which we will return the suggested compatibility list.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.getCompatibilityListSuggestions(body);
};

export default { metadata, tool, handler };
