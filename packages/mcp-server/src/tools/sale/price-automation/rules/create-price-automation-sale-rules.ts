// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.price_automation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/price-automation/rules',
  operationId: 'createAutomaticPricingRulesUsingPost',
};

export const tool: Tool = {
  name: 'create_price_automation_sale_rules',
  description:
    'Use this resource to create automatic pricing rule. This resource is rate limited to 5 requests per second. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-utworzyc-wlasne-reguly-cenowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-create-own-pricing-rules" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description:
          'The rule name. Default rule names are automatically translated based on the value provided in the the "Accept-Language" header.',
      },
      type: {
        $ref: '#/$defs/automatic_pricing_rule_type',
      },
      configuration: {
        $ref: '#/$defs/automatic_pricing_rule_configuration',
      },
    },
    $defs: {
      automatic_pricing_rule_type: {
        type: 'string',
        description:
          'The rule type.\n * `EXCHANGE_RATE` - Calculates prices on additional marketplaces using the latest exchange rates and price from the offer base marketplace.\n                    <br />Is not available on base marketplace and business marketplaces.\n                    <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-przelicznik-cen-LR8WwMKyBf9" target="_blank">More information about EXCHANGE_RATE type</a>.\n * `FOLLOW_BY_ALLEGRO_MIN_PRICE` - Calculates prices by following the lowest product price on Allegro for a given marketplace.\n                    <br />Is not available on business marketplaces.\n                    <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE"  target="_blank">More information about FOLLOW_BY_ALLEGRO_MIN_PRICE type</a>.\n* `FOLLOW_BY_MARKET_MIN_PRICE` - Calculates prices by following the lowest product price on market for a given marketplace.\n                    <br />Is not available on business marketplaces.\n                    <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More information about FOLLOW_BY_MARKET_MIN_PRICE type</a>.\n* `FOLLOW_BY_TOP_OFFER_PRICE` - Calculates prices by following the top offer price on market for a given marketplace.\n                    <br />Is not available on business marketplaces.\n                    <br /><a href="https://help.allegro.com/pl/sell/a/jak-dzialaja-reguly-cenowe-typu-najnizsza-cena-na-allegro-i-top-oferta-8drjrabe3hE" target="_blank">More information about FOLLOW_BY_TOP_OFFER_PRICE type</a>.',
        enum: [
          'EXCHANGE_RATE',
          'FOLLOW_BY_ALLEGRO_MIN_PRICE',
          'FOLLOW_BY_MARKET_MIN_PRICE',
          'FOLLOW_BY_TOP_OFFER_PRICE',
        ],
      },
      automatic_pricing_rule_configuration: {
        anyOf: [
          {
            type: 'object',
            properties: {
              changeByAmount: {
                type: 'object',
                properties: {
                  operation: {
                    type: 'string',
                    enum: ['SUBTRACT', 'ADD'],
                  },
                  values: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        amount: {
                          type: 'string',
                        },
                        currency: {
                          type: 'string',
                        },
                      },
                      required: ['amount', 'currency'],
                    },
                  },
                },
                required: ['operation', 'values'],
              },
            },
            required: ['changeByAmount'],
          },
          {
            type: 'object',
            properties: {
              changeByPercentage: {
                type: 'object',
                properties: {
                  operation: {
                    type: 'string',
                    enum: ['SUBTRACT', 'ADD'],
                  },
                  value: {
                    type: 'string',
                  },
                },
                required: ['operation', 'value'],
              },
            },
            required: ['changeByPercentage'],
          },
        ],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.priceAutomation.rules.create(body));
};

export default { metadata, tool, handler };
