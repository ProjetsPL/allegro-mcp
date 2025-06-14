// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_contacts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-contacts',
  operationId: 'getListOfContactsUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_offer_contacts',
  description:
    'Use this resource to get details of many contacts. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-liste-kontaktow" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-a-list-of-contacts" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.sale.offerContacts.list());
};

export default { metadata, tool, handler };
