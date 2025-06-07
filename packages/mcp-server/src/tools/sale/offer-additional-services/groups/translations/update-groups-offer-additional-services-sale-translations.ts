// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services.groups.translations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sale/offer-additional-services/groups/{groupId}/translations/{language}',
  operationId: 'updateAdditionalServiceGroupTranslation',
};

export const tool: Tool = {
  name: 'update_groups_offer_additional_services_sale_translations',
  description:
    'Use this resource to create/update translation for additional service group and specified language. It is allowed to provide an incomplete list of services that belong to the group. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-uslug-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#additional-services-translations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      groupId: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
      additionalServices: {
        type: 'object',
        properties: {
          translation: {
            type: 'array',
            items: {
              $ref: '#/$defs/additional_service_translation',
            },
          },
        },
        required: [],
      },
    },
    $defs: {
      additional_service_translation: {
        type: 'object',
        properties: {
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
            description:
              'Description of an additional service - provided by merchants and visible by customers.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { language, ...body } = args as any;
  return asTextContentResult(
    await client.sale.offerAdditionalServices.groups.translations.update(language, body),
  );
};

export default { metadata, tool, handler };
