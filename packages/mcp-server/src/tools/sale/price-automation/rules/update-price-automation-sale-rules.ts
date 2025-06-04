// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.price_automation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/price-automation/rules/{ruleId}',
  operationId: 'updateAutomaticPricingRuleUsingPut',
};

export const tool: Tool = {
  name: 'update_price_automation_sale_rules',
  description:
    'Use this resource to update automatic pricing rule. This resource is rate limited to 5 requests per second. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-regule-cenowa" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-modify-a-pricing-rule" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      ruleId: {
        type: 'string',
      },
      name: {
        type: 'string',
        description:
          'The rule name. Default rule names are automatically translated based on the value provided in the the "Accept-Language" header.',
      },
      configuration: {
        $ref: '#/$defs/automatic_pricing_rule_configuration',
      },
    },
    $defs: {
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

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { ruleId, ...body } = args as any;
  return client.sale.priceAutomation.rules.update(ruleId, body);
};

export default { metadata, tool, handler };
