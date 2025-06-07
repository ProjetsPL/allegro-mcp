// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.compatible_products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/compatible-products',
  operationId: 'getCompatibleProducts',
};

export const tool: Tool = {
  name: 'list_sale_compatible_products',
  description:
    'Resource allows to fetch compatible products of given type. Read more: <a href="../../tutorials/jak-zarzadzac-sekcja-pasuje-do-E7Zj6gAEGil#jak-zarzadzac-sekcja-pasuje-do-zintegrowana-z-baza-pojazdow" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-the-compatibility-section-v8WbL1wV0Hz#managing-the-compatibility-section-compatibilitylist-integrated-vehicle-database" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description:
          'Type of compatible products. You can find available types in the response for the GET <a href="/documentation/#tag/Compatibility-List/paths/~1sale~1compatibility-list~1supported-categories/get">supported-categories</a> resource. You can use value provided in `itemsType`, for categories where `inputType=ID`.',
      },
      group: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'Group identifier from `/sale/compatible-products/groups` resource. Parameter is required when parameter `tecdoc.kTypNr` or `tecdoc.nTypNr` or `phrase` is not specified.',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description:
          'The limit of returned items. If `phrase` parameter is present, parameter is ignored and maximum value is set to `200`.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of returned items. If `phrase` parameter is present, parameter is ignored.',
      },
      phrase: {
        type: 'string',
        description:
          'Query for compatible products. When used, parameters: `group.id`, `limit`, `offset` and header `If-Modified-Since` are ignored.',
      },
      tecdoc: {
        type: 'object',
        properties: {
          kTypNr: {
            type: 'string',
            description:
              'Identifier of passenger vehicle (kTypNr) from TecDoc database. When used, `group.id` parameter is ignored.',
          },
          nTypNr: {
            type: 'string',
            description:
              'Identifier of commercial vehicle (nTypNr) from TecDoc database. When used, `group.id` parameter is ignored.',
          },
        },
        required: [],
      },
      'If-Modified-Since': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.compatibleProducts.list(body));
};

export default { metadata, tool, handler };
