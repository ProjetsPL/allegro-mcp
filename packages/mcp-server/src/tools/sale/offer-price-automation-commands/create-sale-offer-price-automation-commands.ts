// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_price_automation_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/offer-price-automation-commands',
  operationId: 'offerAutomaticPricingModificationCommandUsingPOST',
};

export const tool: Tool = {
  name: 'create_sale_offer_price_automation_commands',
  description:
    'Use this resource to modify the automatic pricing rules of multiple offers at the same time. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#reguly-cenowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#pricing-rules" target="_blank">EN</a>. This resource is rate limited to 150 000 offer changes per hour or 9000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      modification: {
        anyOf: [
          {
            type: 'object',
            properties: {
              set: {
                type: 'array',
                description: 'List of marketplaces to which the rules will be added.',
                items: {
                  type: 'object',
                  properties: {
                    marketplace: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          description:
                            'The id of a marketplace.<br/> Available marketplaces can be determined using <a href="#operation/marketplacesGET">GET /marketplaces</a>.',
                        },
                      },
                      required: ['id'],
                    },
                    rule: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          description: 'Identifier of a automatic pricing rule.',
                        },
                      },
                      required: ['id'],
                    },
                    configuration: {
                      $ref: '#/$defs/automatic_pricing_offer_rule_configuration',
                    },
                  },
                  required: ['marketplace', 'rule'],
                },
              },
            },
            required: [],
          },
          {
            type: 'object',
            properties: {
              remove: {
                type: 'array',
                description: 'List of marketplaces from which rules will be removed.',
                items: {
                  type: 'object',
                  properties: {
                    marketplace: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          description:
                            'The id of a marketplace.<br/> Available marketplaces can be determined using <a href="#operation/marketplacesGET">GET /marketplaces</a>.',
                        },
                      },
                      required: ['id'],
                    },
                  },
                  required: ['marketplace'],
                },
              },
            },
            required: [],
          },
        ],
      },
      offerCriteria: {
        type: 'array',
        description: 'List of offer criteria.',
        items: {
          $ref: '#/$defs/offer_criterium',
        },
      },
      id: {
        type: 'string',
        description:
          'The Command identifier. This field is optional. If the client does not provide their own command id then the service will generate a command id and return it in the response.',
      },
    },
    $defs: {
      automatic_pricing_offer_rule_configuration: {
        type: 'object',
        description:
          'Offer Rule configuration. For "EXCHANGE_RATE" the field is not allowed. For "FOLLOW_BY_ALLEGRO_MIN_PRICE", "FOLLOW_BY_MARKET_MIN_PRICE" and "FOLLOW_BY_TOP_OFFER_PRICE" it is necessary for the rule to work.',
        properties: {
          priceRange: {
            type: 'object',
            description: 'Price range. This field is optional.',
            properties: {
              maxPrice: {
                $ref: '#/$defs/price',
              },
              minPrice: {
                $ref: '#/$defs/price',
              },
              type: {
                type: 'string',
                description:
                  'Price range currency type.\n * `BASE_MARKETPLACE_CURRENCY` - The price must be defined in the same currency as offer base marketplace currency.\n * `MARKETPLACE_CURRENCY` - The price must be defined in the same currency as marketplace currency. For a base marketplace this is the only accepted value.',
                enum: ['BASE_MARKETPLACE_CURRENCY', 'MARKETPLACE_CURRENCY'],
              },
            },
            required: ['maxPrice', 'minPrice', 'type'],
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
  const body = args as any;
  return asTextContentResult(await client.sale.offerPriceAutomationCommands.create(body));
};

export default { metadata, tool, handler };
