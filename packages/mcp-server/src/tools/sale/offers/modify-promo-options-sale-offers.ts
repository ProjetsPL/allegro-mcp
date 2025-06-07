// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/offers/{offerId}/promo-options-modification',
  operationId: 'modifyOfferPromoOptionsUsingPOST',
};

export const tool: Tool = {
  name: 'modify_promo_options_sale_offers',
  description:
    'Use this resource to modify offer promotion packages. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-lub-zmienic-opcje-promowania-w-pojedynczej-ofercie" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-or-change-promo-options-in-a-single-offer" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      additionalMarketplaces: {
        type: 'array',
        description: 'Promo package modifications to be applied on additional marketplaces.',
        items: {
          type: 'object',
          properties: {
            marketplaceId: {
              type: 'string',
            },
            modifications: {
              type: 'array',
              description: 'Promo package modifications to be applied on additional marketplace.',
              items: {
                $ref: '#/$defs/promo_options_modification',
              },
            },
          },
          required: [],
        },
      },
      modifications: {
        type: 'array',
        description: 'Promo package modifications to be applied.',
        items: {
          $ref: '#/$defs/promo_options_modification',
        },
      },
    },
    $defs: {
      promo_options_modification: {
        type: 'object',
        properties: {
          modificationType: {
            type: 'string',
            description: 'Type of modification to be applied.',
            enum: ['CHANGE', 'REMOVE_WITH_END_OF_CYCLE', 'REMOVE_NOW'],
          },
          packageId: {
            type: 'string',
            description: 'Promotion package identifier.',
          },
          packageType: {
            type: 'string',
            description: 'Type of promotion package to be changed/removed.',
            enum: ['BASE', 'EXTRA'],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return asTextContentResult(await client.sale.offers.modifyPromoOptions(offerId, body));
};

export default { metadata, tool, handler };
