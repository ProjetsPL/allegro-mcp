// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services.groups.translations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sale/offer-additional-services/groups/{groupId}/translations/{language}',
  operationId: 'deleteAdditionalServiceGroupTranslation',
};

export const tool: Tool = {
  name: 'delete_groups_offer_additional_services_sale_translations',
  description:
    'Use this resource to delete the translation for specified additional service group and language. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-uslug-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#additional-services-translations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      groupId: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { language, ...body } = args as any;
  await client.sale.offerAdditionalServices.groups.translations.delete(language, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
