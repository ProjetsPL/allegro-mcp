// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount.withdraw_offer_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/alle-discount/withdraw-offer-commands',
  operationId: 'withdrawOfferFromAlleDiscountCommands',
};

export const tool: Tool = {
  name: 'create_alle_discount_sale_withdraw_offer_commands',
  description:
    'Use this resource to create a command for withdrawing an offer from specific campaign. Offer will be withdrawn from the AlleDiscount campaign only if command is processed successfully. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-wycofac-oferte-z-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-withdraw-an-offer-from-a-campaign" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
        description: 'The Command UUID. If empty, system generates new one.',
      },
      input: {
        type: 'object',
        description: 'Command input.',
        properties: {
          participationId: {
            type: 'string',
            description:
              'The id of the offer participation you wish to withdraw. Participation id can be found using `GET /sale/alle-discount/{campaignId}/submitted-offers` or `GET /sale/alle-discount/submit-offer-commands` endpoints.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.alleDiscount.withdrawOfferCommands.create(body);
};

export default { metadata, tool, handler };
