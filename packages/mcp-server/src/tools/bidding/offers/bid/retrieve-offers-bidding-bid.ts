// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'bidding.offers.bid',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/bidding/offers/{offerId}/bid',
  operationId: 'getBid',
};

export const tool: Tool = {
  name: 'retrieve_offers_bidding_bid',
  description:
    'Get current user\'s bid information. Read more: <a href="../../news/nowe-zasoby-zloz-oferte-kupna-w-licytacji-q018m02vDT1" target="_blank">PL</a> / <a href="../../news/new-resources-place-a-bid-in-an-auction-rjWwEj1e7sG" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.bidding.offers.bid.retrieve(offerId);
};

export default { metadata, tool, handler };
