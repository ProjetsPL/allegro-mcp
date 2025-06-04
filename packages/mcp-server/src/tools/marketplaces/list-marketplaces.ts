// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'marketplaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/marketplaces',
  operationId: 'marketplacesGET',
};

export const tool: Tool = {
  name: 'list_marketplaces',
  description:
    'Use this resource to get information about all the marketplaces on the platform. Read more: <a href="../../tutorials/wystawianie-i-zarzadzanie-oferta-w-serwisach-zagranicznych-wwzjP4M8gTZ#serwis-bazowy-uzytkownika-oraz-lista-dostepnych-serwisow" target="_blank">PL</a> / <a href="../../tutorials/listing-and-managing-offers-on-foreign-marketplaces-7GndGjeAATn#user-s-base-marketplace-and-list-of-available-marketplaces" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return client.marketplaces.list();
};

export default { metadata, tool, handler };
