// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.badges.offers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sale/badges/offers/{offerId}/campaigns/{campaignId}',
  operationId: 'patchBadge',
};

export const tool: Tool = {
  name: 'update_campaign_badges_sale_offers',
  description:
    'This resource allows you to update a campaign badge for the given offer. You can use *Location* provided in header of the response to track your update status. Update offer price in a campaign or finish marking an offer in a campaign.\nRead more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#zmiana-ceny-i-zakonczenie-oznaczenia" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#change-price-and-finish-badge" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          offerId: {
            type: 'string',
          },
          campaignId: {
            type: 'string',
          },
          process: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                enum: ['FINISHED'],
              },
            },
            required: [],
          },
        },
      },
      {
        type: 'object',
        properties: {
          offerId: {
            type: 'string',
          },
          campaignId: {
            type: 'string',
          },
          prices: {
            type: 'object',
            properties: {
              bargain: {
                type: 'object',
                properties: {
                  value: {
                    $ref: '#/$defs/badge_application_bargain_price',
                  },
                },
                required: [],
              },
            },
            required: [],
          },
        },
      },
    ],
    $defs: {
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
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { campaignId, ...body } = args as any;
  return asTextContentResult(await client.sale.badges.offers.updateCampaign(campaignId, body));
};

export default { metadata, tool, handler };
