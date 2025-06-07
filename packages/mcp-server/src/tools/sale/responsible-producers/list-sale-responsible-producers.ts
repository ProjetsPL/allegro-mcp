// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.responsible_producers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/responsible-producers',
  operationId: 'responsibleProducersGET',
};

export const tool: Tool = {
  name: 'list_sale_responsible_producers',
  description:
    'Use this resource to get a list of responsible producers for the compliance of the product with EU regulations. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      Accept: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Number of returned responsible producers data.',
      },
      offset: {
        type: 'integer',
        description: 'Index of first returned responsible producers data from all search results.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.responsibleProducers.list(body));
};

export default { metadata, tool, handler };
