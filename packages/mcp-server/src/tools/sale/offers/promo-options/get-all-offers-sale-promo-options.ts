// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.promo_options',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offers/promo-options',
  operationId: 'getPromoOptionsForSellerOffersUsingGET',
};

export const tool: Tool = {
  name: 'get_all_offers_sale_promo_options',
  description:
    'Use this resource to retrieve promo options for seller offers. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-opcje-promowania-dla-wielu-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-available-promo-options-for-multiple-offers" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Limit of promo options per page.',
      },
      offset: {
        type: 'integer',
        description:
          'Distance between the beginning of the document and the point from which promo options are returned.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.offers.promoOptions.getAll(body));
};

export default { metadata, tool, handler };
