// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.allegro_prices_offer_consents',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/allegro-prices-offer-consents/{offerId}',
  operationId: 'updateAllegroPricesConsentForOffer',
};

export const tool: Tool = {
  name: 'update_sale_allegro_prices_offer_consents',
  description:
    'Use this resource to update the Allegro Prices consent value for the offer on chosen marketplaces. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      additionalMarketplaces: {
        type: 'object',
        description:
          'Use it to update the consent on marketplaces other than the base marketplace of the offer.',
      },
      status: {
        type: 'string',
        description: 'Use it to update the consent on the base marketplace of the offer.',
        enum: ['ALLOWED', 'DENIED'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.sale.allegroPricesOfferConsents.update(offerId, body);
};

export default { metadata, tool, handler };
