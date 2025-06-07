// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.user_ratings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/user-ratings',
  operationId: 'getUserRatingsUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_user_ratings',
  description:
    'Use this resource to receive your sales ratings sorted by last change date, starting from the latest. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-informacje-o-ocenie-sprzedazy" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-user-s-ratings-data" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      lastChangedAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description:
              'Last change (creation or latest edition) date time in ISO 8601 format. The lower bound of date time range from which ratings will be fetched.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description:
              'Last change (creation or latest edition) date time in ISO 8601 format. The upper bound of date time range from which ratings will be fetched.',
            format: 'date-time',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'The limit of elements in the response.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
      recommended: {
        type: 'string',
        description: 'Filter by recommended.',
        enum: ['true', 'false'],
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.userRatings.list(body));
};

export default { metadata, tool, handler };
