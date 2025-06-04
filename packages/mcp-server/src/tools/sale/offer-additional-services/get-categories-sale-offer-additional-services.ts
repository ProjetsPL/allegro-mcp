// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-additional-services/categories',
  operationId: 'getListOfAdditionalServicesDefinitionsCategoriesUsingGET',
};

export const tool: Tool = {
  name: 'get_categories_sale_offer_additional_services',
  description:
    'Use this resource to get additional services definitions, grouped by additional services categories, available on given marketplace. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-liste-dostepnych-uslug-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-a-list-of-available-additional-services" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return client.sale.offerAdditionalServices.getCategories();
};

export default { metadata, tool, handler };
