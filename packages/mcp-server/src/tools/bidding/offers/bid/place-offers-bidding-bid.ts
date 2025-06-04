// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'bidding.offers.bid',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/bidding/offers/{offerId}/bid',
  operationId: 'placeBid',
};

export const tool: Tool = {
  name: 'place_offers_bidding_bid',
  description:
    'Place a bid in an auction. Read more: <a href="../../news/nowe-zasoby-zloz-oferte-kupna-w-licytacji-q018m02vDT1" target="_blank">PL</a> / <a href="../../news/new-resources-place-a-bid-in-an-auction-rjWwEj1e7sG" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      maxAmount: {
        $ref: '#/$defs/max_price',
      },
    },
    $defs: {
      max_price: {
        type: 'object',
        description: 'The price data.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
          },
        },
        required: ['amount', 'currency'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.bidding.offers.bid.place(offerId, body);
};

export default { metadata, tool, handler };
