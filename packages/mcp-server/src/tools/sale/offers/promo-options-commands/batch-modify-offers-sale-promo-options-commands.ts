// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.promo_options_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offers/promo-options-commands/{commandId}',
  operationId: 'promoModificationCommandUsingPUT',
};

export const tool: Tool = {
  name: 'batch_modify_offers_sale_promo_options_commands',
  description:
    'Use this resource to modify promotion packages on multiple offers at once. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-lub-edytowac-opcje-promowania-na-wielu-ofertach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-or-change-promo-options-in-multiple-offers" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
      additionalMarketplaces: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            marketplaceId: {
              type: 'string',
            },
            modification: {
              $ref: '#/$defs/promo_options_command_modification',
            },
          },
          required: [],
        },
      },
      modification: {
        $ref: '#/$defs/promo_options_command_modification',
      },
      offerCriteria: {
        type: 'array',
        description: 'Offer choice criteria.',
        items: {
          $ref: '#/$defs/offer_criterium',
        },
      },
    },
    $defs: {
      promo_options_command_modification: {
        type: 'object',
        properties: {
          basePackage: {
            $ref: '#/$defs/promo_options_command_modification_package',
          },
          extraPackages: {
            type: 'array',
            description:
              'Extra packages to be set on offer. Omitting this parameter will preserve the packages already present.',
            items: {
              $ref: '#/$defs/promo_options_command_modification_package',
            },
          },
          modificationTime: {
            type: 'string',
            description: 'Time at which the modification will be applied.',
            enum: ['NOW', 'END_OF_CYCLE'],
          },
        },
        required: [],
      },
      promo_options_command_modification_package: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: [],
      },
      offer_criterium: {
        type: 'object',
        description: 'Contains offers criteria',
        properties: {
          offers: {
            type: 'array',
            description: 'Set of offers',
            items: {
              $ref: '#/$defs/offer_id',
            },
          },
          type: {
            type: 'string',
            description: 'Criteria type: CONTAINS_OFFERS',
            enum: ['CONTAINS_OFFERS'],
          },
        },
        required: [],
      },
      offer_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Offer id',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return client.sale.offers.promoOptionsCommands.batchModify(commandId, body);
};

export default { metadata, tool, handler };
