// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount.submit_offer_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/alle-discount/submit-offer-commands',
  operationId: 'submitOfferToAlleDiscountCommands',
};

export const tool: Tool = {
  name: 'create_alle_discount_sale_submit_offer_commands',
  description:
    'Use this resource to create a command for submitting an offer. Offer will be submitted to the AlleDiscount campaign only if command is processed successfully. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-zglosic-oferte-do-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-submit-an-offer-to-a-campaign" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
        description: 'The command UUID. If empty, system generates new one.',
      },
      input: {
        type: 'object',
        description: 'Command input.',
        properties: {
          campaign: {
            type: 'object',
            description: 'Data of AlleDiscount campaign you want to submit your offer to.',
            properties: {
              id: {
                type: 'string',
                description: 'The id of the AlleDiscount campaign.',
              },
            },
            required: [],
          },
          offer: {
            type: 'object',
            description: 'Data of the offer you want to submit to the AlleDiscount campaign.',
            properties: {
              id: {
                type: 'string',
                description: 'The id of the offer.',
              },
            },
            required: [],
          },
          proposedPrice: {
            type: 'object',
            description:
              'The price you agree to lower to for the offer. Must be equal or lower than requiredMerchantPrice returned in `/sale/alle-discount/{campaignId}/eligible-offers` endpoint.',
            properties: {
              amount: {
                type: 'string',
                description: 'Amount of the proposed price.',
              },
              currency: {
                type: 'string',
                description: 'Currency of the proposed price.',
              },
            },
            required: [],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.alleDiscount.submitOfferCommands.create(body);
};

export default { metadata, tool, handler };
