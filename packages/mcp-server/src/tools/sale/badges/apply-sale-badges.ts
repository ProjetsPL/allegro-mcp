// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.badges',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/badges',
  operationId: 'postBadges',
};

export const tool: Tool = {
  name: 'apply_sale_badges',
  description:
    'This resource allows you to apply for a badge. Most badges involve additional fee charged.\nYour badge application will be verified and you will be notified about the verification status via e-mail. You can use *Location* provided in header of the response to track your application status. Application will be removed after 30 days when status of the application was changed form PROCESSED or DECLINED.\nFees will be charged in accordance with Annex No. 1 to the\n  <a href="https://allegro.pl/regulaminy/regulamin-strefy-okazji-9dGVAPB69In"\n    target="_blank">Daily deals zone terms and conditions</a>.\n\nBy using this resource you agree to the\n  <a href="https://allegro.pl/regulaminy/regulamin-strefy-okazji-9dGVAPB69In"\n    target="_blank">Daily deals zone terms and conditions</a>\nor\n  <a href="https://allegro.pl/regulaminy/regulamin-programu-bonusowego-prowizja-nawet-0-5-0KPkAE7wkcv"\n    target="_blank">Commission discount terms and conditions</a>.\nRead more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#zglos-oferte-do-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#submit-offer-to-a-campaign" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign: {
        $ref: '#/$defs/badge_application_campaign',
      },
      offer: {
        $ref: '#/$defs/badge_application_offer',
      },
      prices: {
        $ref: '#/$defs/badge_application_prices',
      },
      purchaseConstraints: {
        $ref: '#/$defs/badge_application_purchase_constraints',
      },
    },
    $defs: {
      badge_application_campaign: {
        type: 'object',
        title: 'BadgeApplicationCampaign',
        properties: {
          id: {
            type: 'string',
            description: 'Badge campaign ID.',
          },
        },
        required: ['id'],
      },
      badge_application_offer: {
        type: 'object',
        title: 'BadgeOffer',
        properties: {
          id: {
            type: 'string',
            description: 'Offer ID.',
          },
        },
        required: ['id'],
      },
      badge_application_prices: {
        type: 'object',
        title: 'BadgeApplicationPrices',
        description: 'Required by DISCOUNT and SOURCING campaign.',
        properties: {
          bargain: {
            $ref: '#/$defs/badge_application_bargain_price',
          },
        },
        required: [],
      },
      badge_application_bargain_price: {
        type: 'object',
        title: 'BadgeApplicationBargainPrice',
        description: 'Bargain price. Required by DISCOUNT and SOURCING campaign.',
        properties: {
          amount: {
            type: 'string',
            description: 'Value must be greater than minimal, decimal places aligned with market rules.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217). Only base currency for a given marketplace is supported, example: PLN for allegro-pl, CZK for allegro-cz, EUR for allegro-sk.',
          },
        },
        required: [],
      },
      badge_application_purchase_constraints: {
        type: 'object',
        description:
          'Constraints of purchase of this offer while it participates in the campaign. Optional for all campaigns types.',
        properties: {
          limit: {
            type: 'object',
            description:
              'Limits of purchase of this offer while it participates in the campaign. Only DISCOUNT and SOURCING campaigns.',
            properties: {
              perUser: {
                type: 'object',
                description:
                  'Limits of purchase of this offer per user while it participates in the campaign.',
                properties: {
                  maxItems: {
                    type: 'integer',
                    description:
                      'Maximum number of items that one user can buy of this offer, while it participates in the campaign.',
                  },
                },
                required: [],
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

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.badges.apply(body));
};

export default { metadata, tool, handler };
