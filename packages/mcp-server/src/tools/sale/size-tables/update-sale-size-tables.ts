// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.size_tables',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/size-tables/{tableId}',
  operationId: 'modifyTableUsingPUT',
};

export const tool: Tool = {
  name: 'update_sale_size_tables',
  description:
    'Use this resource to update selected size table. Read more: <a href="../../news/tabele-rozmiarow-zmieniamy-istniejacy-zasob-i-dodajemy-nowe-zasoby-do-ich-obslugi-k1nyd21A4fP" target="_blank">PL</a> / <a href="../../news/size-tables-we-change-the-existing-resource-and-add-new-resources-to-handle-them-jn91bynlbC9" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      tableId: {
        type: 'string',
      },
      headers: {
        type: 'array',
        description: 'size table headers',
        items: {
          $ref: '#/$defs/header',
        },
      },
      name: {
        type: 'string',
        description: 'size table name',
      },
      values: {
        type: 'array',
        description: 'size table cells',
        items: {
          $ref: '#/$defs/cells',
        },
      },
    },
    $defs: {
      header: {
        type: 'object',
        title: 'Header',
        properties: {
          name: {
            type: 'string',
          },
        },
        required: ['name'],
      },
      cells: {
        type: 'object',
        title: 'Cells',
        properties: {
          cells: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: ['cells'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { tableId, ...body } = args as any;
  return asTextContentResult(await client.sale.sizeTables.update(tableId, body));
};

export default { metadata, tool, handler };
