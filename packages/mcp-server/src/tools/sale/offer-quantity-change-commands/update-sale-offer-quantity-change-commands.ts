// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_quantity_change_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-quantity-change-commands/{commandId}',
  operationId: 'quantityModificationCommandUsingPUT',
};

export const tool: Tool = {
  name: 'update_sale_offer_quantity_change_commands',
  description:
    'Change quantity of multiple offers. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#liczba-przedmiotow" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#quantity" target="_blank">EN</a>. This resource is rate limited to 250 000 offer changes per hour or 9000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
      modification: {
        type: 'object',
        description:
          'The way the offer quantity should be changed. One of two ways is possible: new quantity, increase/decrease quantity and only one can be chosen at once.',
        properties: {
          changeType: {
            type: 'string',
            description: 'modification type',
            enum: ['FIXED', 'GAIN'],
          },
          value: {
            type: 'integer',
            description:
              '- For changeType = "FIXED", a new stock quantity > 0\n- For changeType = "GAIN", an increase/decrease in stock quantity',
          },
        },
        required: [],
      },
      offerCriteria: {
        type: 'array',
        description: 'List of offer criteria',
        items: {
          $ref: '#/$defs/offer_criterium',
        },
      },
    },
    $defs: {
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

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerQuantityChangeCommands.update(commandId, body));
};

export default { metadata, tool, handler };
