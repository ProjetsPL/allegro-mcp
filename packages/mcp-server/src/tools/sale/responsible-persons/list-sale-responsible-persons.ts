// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.responsible_persons',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/responsible-persons',
  operationId: 'responsiblePersonsGET',
};

export const tool: Tool = {
  name: 'list_sale_responsible_persons',
  description:
    'Use this resource to get a list of responsible persons for the compliance of the product with EU regulations. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#osoba-odpowiedzialna-za-zgodnosc-produktu-z-przepisami-unijnymi" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-persons-for-the-compliance-of-the-product-with-eu-regulations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      Accept: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Number of returned responsible persons data.',
      },
      offset: {
        type: 'integer',
        description: 'Index of first returned responsible persons data from all search results.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.responsiblePersons.list(body));
};

export default { metadata, tool, handler };
