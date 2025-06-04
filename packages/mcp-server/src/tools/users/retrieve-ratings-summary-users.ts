// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{userId}/ratings-summary',
  operationId: 'getUserSummaryUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_ratings_summary_users',
  description:
    'Use this resource to receive feedback statistics. Read more: <a href="../../news/nowe-zasoby-ktorymi-pobierzesz-informacje-o-ocenach-ZM9L1WPBbUb" target="_blank">PL</a> / <a href="../../news/new-resources-to-download-sales-feedback-d2VYERBMRiz" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { userId, ...body } = args as any;
  return client.users.retrieveRatingsSummary(userId);
};

export default { metadata, tool, handler };
