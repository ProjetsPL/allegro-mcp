// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.user_ratings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/user-ratings/{ratingId}/answer',
  operationId: 'answerUserRatingUsingPUT',
};

export const tool: Tool = {
  name: 'answer_sale_user_ratings',
  description:
    'Use this resource to answer for received rating. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-dodac-odpowiedz-na-ocene" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-answer-for-user-rating" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      ratingId: {
        type: 'string',
      },
      message: {
        type: 'string',
        description: 'Answer message.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { ratingId, ...body } = args as any;
  return asTextContentResult(await client.sale.userRatings.answer(ratingId, body));
};

export default { metadata, tool, handler };
