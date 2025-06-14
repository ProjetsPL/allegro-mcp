// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.translations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sale/offers/{offerId}/translations/{language}',
  operationId: 'updateOfferTranslationUsingPATCH',
};

export const tool: Tool = {
  name: 'update_offers_sale_translations',
  description:
    'Update manual translation for offer. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#offer-translations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
      description: {
        type: 'object',
        title: 'ManualDescriptionTranslation',
        description: 'Manual offer description translation',
        properties: {
          translation: {
            $ref: '#/$defs/standardized_description',
          },
        },
        required: [],
      },
      safetyInformation: {
        type: 'object',
        description:
          'Manual offer products safety information translations. Updating this resource is in accordance with <a href=" https://datatracker.ietf.org/doc/html/rfc7396/" target="_blank">RFC7396</a> - all or nothing.\'',
        properties: {
          products: {
            type: 'array',
            items: {
              type: 'object',
              description: 'Manual product safety information translation',
              properties: {
                id: {
                  type: 'string',
                  description: 'Product id connected with provided translated content',
                },
                translation: {
                  type: 'string',
                  description: 'Manual product safety information translation content',
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
      title: {
        type: 'object',
        title: 'ManualTitleTranslation',
        description: 'Manual offer title translation',
        properties: {
          translation: {
            type: 'string',
            description: 'Manual offer title translation content',
          },
        },
        required: [],
      },
    },
    $defs: {
      standardized_description: {
        type: 'object',
        description: 'The description section cannot have more than 40000 bytes in length.',
        properties: {
          sections: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    description: 'One of: TextItem, ImageItem',
                    properties: {
                      type: {
                        type: 'string',
                      },
                    },
                    required: ['type'],
                  },
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { language, ...body } = args as any;
  await client.sale.offers.translations.update(language, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
