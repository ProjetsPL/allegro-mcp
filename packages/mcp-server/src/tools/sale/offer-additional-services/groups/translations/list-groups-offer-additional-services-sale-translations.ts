// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services.groups.translations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-additional-services/groups/{groupId}/translations',
  operationId: 'getAdditionalServiceGroupTranslations',
};

export const tool: Tool = {
  name: 'list_groups_offer_additional_services_sale_translations',
  description:
    'Use this resource to get translations for additional service group. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-uslug-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#additional-services-translations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      groupId: {
        type: 'string',
      },
      language: {
        type: 'string',
        description:
          'IETF language tag. When provided, the response will contain translations in only that language (if exists).',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { groupId, ...body } = args as any;
  return asTextContentResult(
    await client.sale.offerAdditionalServices.groups.translations.list(groupId, body),
  );
};

export default { metadata, tool, handler };
