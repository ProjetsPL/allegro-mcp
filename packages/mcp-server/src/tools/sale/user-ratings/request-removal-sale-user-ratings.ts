// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.user_ratings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/user-ratings/{ratingId}/removal',
  operationId: 'userRatingRemovalUsingPUT',
};

export const tool: Tool = {
  name: 'request_removal_sale_user_ratings',
  description:
    'Use this resource to request removal of received rating. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-wyslac-prosbe-o-usuniecie-oceny" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-send-a-request-to-remove-user-rating" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      ratingId: {
        type: 'string',
      },
      request: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Message containing explanation for removing rating.',
          },
        },
        required: ['message'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { ratingId, ...body } = args as any;
  return client.sale.userRatings.requestRemoval(ratingId, body);
};

export default { metadata, tool, handler };
