// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.badges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/badges',
  operationId: 'getBadges',
};

export const tool: Tool = {
  name: 'list_sale_badges',
  description:
    'Use this resource to get a list of badges in authorized seller\'s offers. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#kampanie-przypisane-do-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#check-badges-assigned-to-offers" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The maximum number of badges returned in the response.',
      },
      marketplace: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The marketplace of badges.',
          },
        },
        required: [],
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Offer ID.',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'Offset.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.badges.list(body));
};

export default { metadata, tool, handler };
