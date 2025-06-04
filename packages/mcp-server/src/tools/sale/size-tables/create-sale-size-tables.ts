// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.size_tables',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/size-tables',
  operationId: 'createTableUsingPOST',
};

export const tool: Tool = {
  name: 'create_sale_size_tables',
  description:
    'Use this resource to create size table. Read more: <a href="../../news/tabele-rozmiarow-zmieniamy-istniejacy-zasob-i-dodajemy-nowe-zasoby-do-ich-obslugi-k1nyd21A4fP" target="_blank">PL</a> / <a href="../../news/size-tables-we-change-the-existing-resource-and-add-new-resources-to-handle-them-jn91bynlbC9" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
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
      template: {
        $ref: '#/$defs/just_id',
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
      just_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: [],
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

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.sizeTables.create(body);
};

export default { metadata, tool, handler };
