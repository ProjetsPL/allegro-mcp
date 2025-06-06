// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.size_tables',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/size-tables/{tableId}',
  operationId: 'getTableUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_size_tables',
  description:
    'Use this resource to get selected size table. Read more: <a href="../../news/tabele-rozmiarow-w-rest-api-LRV05q2dGtV" target="_blank">PL</a> / <a href="../../news/size-tables-in-rest-api-D7KP4DE1BH3" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      tableId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { tableId, ...body } = args as any;
  return asTextContentResult(await client.sale.sizeTables.retrieve(tableId));
};

export default { metadata, tool, handler };
