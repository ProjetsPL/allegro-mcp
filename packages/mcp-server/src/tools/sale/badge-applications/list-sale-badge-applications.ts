// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.badge_applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/badge-applications',
  operationId: 'badgeApplications_get_all',
};

export const tool: Tool = {
  name: 'list_sale_badge_applications',
  description:
    'Use this resource to get a list of badge applications. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#pobierz-swoje-zgloszenia" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#retrieve-all-campaign-applications" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Campaign ID.',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of applications returned in the response.',
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
  return asTextContentResult(await client.sale.badgeApplications.list(body));
};

export default { metadata, tool, handler };
