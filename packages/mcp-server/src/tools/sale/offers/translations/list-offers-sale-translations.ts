// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.translations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offers/{offerId}/translations',
  operationId: 'getOfferTranslationUsingGET',
};

export const tool: Tool = {
  name: 'list_offers_sale_translations',
  description:
    'Get offer translation for given language or all present. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#offer-translations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      language: {
        type: 'string',
        description:
          'Language for translation to retrieve. If not provided, all translations as well as base content for offer will be returned.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.sale.offers.translations.list(offerId, body);
};

export default { metadata, tool, handler };
