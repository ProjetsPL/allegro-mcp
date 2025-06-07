// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_classifieds_packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-classifieds-packages/{offerId}',
  operationId: 'getClassifiedPackagesUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_offer_classifieds_packages',
  description:
    'Use this resource to retrieve classified packages currently assigned to an offer. Read more: <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#dodatkowe-opcje-promowania" target="_blank">PL</a> / <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#additional-promo-options" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerClassifiedsPackages.retrieve(offerId));
};

export default { metadata, tool, handler };
