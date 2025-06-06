// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.allegro_prices_offer_consents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/allegro-prices-offer-consents/{offerId}',
  operationId: 'getAllegroPricesConsentForOffer',
};

export const tool: Tool = {
  name: 'retrieve_sale_allegro_prices_offer_consents',
  description:
    'Use this resource to get the current Allegro Prices consent value for the offer on each of the available marketplaces. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.',
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
  return asTextContentResult(await client.sale.allegroPricesOfferConsents.retrieve(offerId));
};

export default { metadata, tool, handler };
