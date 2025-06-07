// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'pricing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/pricing/offer-fee-preview',
  operationId: 'calculateFeePreviewUsingPOST',
};

export const tool: Tool = {
  name: 'calculate_fee_preview_pricing',
  description:
    'Provides information about fee and commission for an offer. This resource is limited to 25 requests per second for a single user. Read more: <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#kalkulator-oplat" target="_blank">PL</a> / <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#fee-calculator" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      classifiedsPackages: {
        type: 'object',
        properties: {
          basePackage: {
            $ref: '#/$defs/classified_package',
          },
          extraPackages: {
            type: 'array',
            description: 'An array of extra packages.',
            items: {
              $ref: '#/$defs/classified_extra_package',
            },
          },
        },
        required: [],
      },
      marketplaceId: {
        type: 'string',
        description:
          'The marketplace on which the offer should be previewed. If omitted, it will default to the base marketplace.',
      },
      offer: {
        type: 'object',
        description: 'Single offer data.',
        properties: {
          id: {
            type: 'string',
          },
          category: {
            $ref: '#/$defs/category',
          },
          fundraisingCampaign: {
            $ref: '#/$defs/just_id',
          },
          parameters: {
            type: 'array',
            items: {
              type: 'object',
              description: "Offer's parameter.",
              properties: {
                id: {
                  type: 'string',
                },
                rangeValue: {
                  $ref: '#/$defs/parameter_range_value',
                },
                values: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                valuesIds: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
              required: ['id'],
            },
          },
          promotion: {
            type: 'object',
            description: 'Promo options on base marketplace.',
            properties: {
              departmentPage: {
                type: 'boolean',
              },
              emphasized10d: {
                type: 'boolean',
              },
              emphasized1d: {
                type: 'boolean',
              },
              promoPackage: {
                type: 'boolean',
              },
            },
            required: [],
          },
          publication: {
            type: 'object',
            properties: {
              duration: {
                type: 'string',
                description:
                  'This field must be set to one of the following:<br/> - for auctions: 1 day, 3 days, 5 days, 7 days, 10 days<br/> - for buy-now offers: 3 days, 5 days, 7 days, 10 days, 20 days, 30 days<br/> - for advertisements: 10 days, 20 days, 30 days.<br/> The value is in ISO 8601 format (example: PT24H, PT72H).',
              },
            },
            required: [],
          },
          sellingMode: {
            type: 'object',
            description: "Information on the offer's selling mode.",
            properties: {
              format: {
                $ref: '#/$defs/selling_mode_format',
              },
              minimalPrice: {
                $ref: '#/$defs/minimal_price',
              },
              netPrice: {
                $ref: '#/$defs/price',
              },
              price: {
                $ref: '#/$defs/buy_now_price',
              },
              startingPrice: {
                $ref: '#/$defs/starting_price',
              },
            },
            required: [],
          },
        },
        required: [],
      },
    },
    $defs: {
      classified_package: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The classifieds package ID.',
          },
        },
        required: [],
      },
      classified_extra_package: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The classifieds extra package ID.',
          },
          republish: {
            type: 'boolean',
            description:
              'Extra package with this flag set to true will be recreated when offer is being republished',
          },
        },
        required: [],
      },
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Category identifier.',
          },
        },
        required: [],
      },
      just_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: [],
      },
      parameter_range_value: {
        type: 'object',
        description: "Parameter's range value",
        properties: {
          from: {
            type: 'string',
          },
          to: {
            type: 'string',
          },
        },
        required: ['from', 'to'],
      },
      selling_mode_format: {
        type: 'string',
        description: 'The selling format of the offer.',
        enum: ['BUY_NOW', 'AUCTION', 'ADVERTISEMENT'],
      },
      minimal_price: {
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
      buy_now_price: {
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
      starting_price: {
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
  const body = args as any;
  return asTextContentResult(await client.pricing.calculateFeePreview(body));
};

export default { metadata, tool, handler };
