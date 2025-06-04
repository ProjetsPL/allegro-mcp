// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.translations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sale/offers/{offerId}/translations/{language}',
  operationId: 'deleteManualTranslationUsingDELETE',
};

export const tool: Tool = {
  name: 'delete_offers_sale_translations',
  description:
    'Delete single element or entire manual translation. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#offer-translations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
      element: {
        type: 'string',
        description:
          'Offer element for which translation should be deleted. If not provided, translations for all elements will be deleted.',
        enum: ['title', 'description', 'safety_information'],
      },
      products: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'ProductId for which safety information translation should be deleted. If not provided, safety information translations for all products in offer will be deleted.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { language, ...body } = args as any;
  return client.sale.offers.translations.delete(language, body);
};

export default { metadata, tool, handler };
