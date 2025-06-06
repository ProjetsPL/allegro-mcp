// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.disputes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/disputes',
  operationId: 'getListOfDisputesUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_disputes',
  description:
    'Use this resource to get the list of your disputes ordered by descending opened date. Read more: <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#dyskusje-na-koncie" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#all-discussions" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      checkoutForm: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Checkout form identifier.',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of disputes in a response.',
      },
      offset: {
        type: 'integer',
        description: 'Index of first returned dispute.',
      },
      status: {
        type: 'array',
        description: 'Filter disputes with given set of statuses.',
        items: {
          type: 'string',
          enum: ['CLOSED', 'ONGOING', 'UNRESOLVED'],
        },
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.disputes.list(body));
};

export default { metadata, tool, handler };
