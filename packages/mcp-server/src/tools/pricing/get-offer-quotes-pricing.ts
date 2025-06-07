// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'pricing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/pricing/offer-quotes',
  operationId: 'offerQuotesPublicUsingGET',
};

export const tool: Tool = {
  name: 'get_offer_quotes_pricing',
  description:
    'This endpoint returns current offer quotes (listing and promo fees) cycles for authenticated user and list of offers. Read more: <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#data-naliczenia-kolejnej-oplaty" target="_blank">PL</a> / <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#check-when-a-fee-is-charged" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'List of offer Ids, maximum 20 values.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pricing.getOfferQuotes(body));
};

export default { metadata, tool, handler };
