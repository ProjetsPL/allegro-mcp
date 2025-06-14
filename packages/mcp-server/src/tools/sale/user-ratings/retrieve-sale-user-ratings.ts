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
  httpPath: '/sale/user-ratings/{ratingId}',
  operationId: 'getUserRatingUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_user_ratings',
  description:
    'Use this resource to receive your sales rating by given rating id. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-informacje-o-ocenie-sprzedazy" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-user-s-ratings-data" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      ratingId: {
        type: 'string',
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { ratingId, ...body } = args as any;
  return asTextContentResult(await client.sale.userRatings.retrieve(ratingId, body));
};

export default { metadata, tool, handler };
