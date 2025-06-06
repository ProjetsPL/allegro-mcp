// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services.groups',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-additional-services/groups/{groupId}',
  operationId: 'modifyAdditionalServicesGroupUsingPUT',
};

export const tool: Tool = {
  name: 'update_offer_additional_services_sale_groups',
  description:
    'Use this resource to modify existing additional service group. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-zaktualizowac-grupe-uslug-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-additional-service-group" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      groupId: {
        type: 'string',
      },
      additionalServices: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            configurations: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  constraintCriteria: {
                    type: 'object',
                    properties: {
                      country: {
                        type: 'string',
                      },
                      deliveryMethods: {
                        type: 'array',
                        description:
                          'This is used by additional services that are realised in transport (e.g. CARRY_IN), and this field exists together with COUNTRY_DELIVERY_SAME_QUANTITY constraint type. It describes which delivery methods can realise particular service.',
                        items: {
                          $ref: '#/$defs/just_id',
                        },
                      },
                      type: {
                        type: 'string',
                        description:
                          'Constraint type. COUNTRY_SAME_QUANTITY is used by additional services that are realised before shipping (e.g. GIFT_WRAP), while COUNTRY_DELIVERY_SAME_QUANTITY is for additional services that are realised in delivery (e.g. CARRY_IN).',
                        enum: ['COUNTRY_SAME_QUANTITY', 'COUNTRY_DELIVERY_SAME_QUANTITY'],
                      },
                    },
                    required: [],
                  },
                  price: {
                    $ref: '#/$defs/price',
                  },
                },
                required: [],
              },
            },
            definition: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
              },
              required: ['id'],
            },
            description: {
              type: 'string',
            },
          },
          required: ['configurations', 'definition', 'description'],
        },
      },
      language: {
        type: 'string',
        description:
          "IETF language tag. Must be equal to main language for given marketplace: 'pl-PL' on allegro.pl and 'cs-CZ' on allegro.cz while creating new group.<br/> Cannot change the language of already created group while modifying existing group.",
      },
      name: {
        type: 'string',
        description: 'Name of the group provided by merchant, invisible for buyers.',
      },
    },
    $defs: {
      just_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: [],
      },
      price: {
        type: 'object',
        description: 'The price data.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
          },
        },
        required: ['amount', 'currency'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { groupId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerAdditionalServices.groups.update(groupId, body));
};

export default { metadata, tool, handler };
