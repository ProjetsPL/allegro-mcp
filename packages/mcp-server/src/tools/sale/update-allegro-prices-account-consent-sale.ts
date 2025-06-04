// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/allegro-prices-account-consent',
  operationId: 'updateAllegroPricesConsentForAccount',
};

export const tool: Tool = {
  name: 'update_allegro_prices_account_consent_sale',
  description:
    'Use this resource to update the Allegro Prices consent value for the account on chosen marketplaces. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      additionalMarketplaces: {
        type: 'object',
        description: 'Consent statuses on marketplaces other than the base marketplace of the account.',
      },
      status: {
        type: 'string',
        enum: ['ALLOWED', 'DENIED'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.updateAllegroPricesAccountConsent(body);
};

export default { metadata, tool, handler };
