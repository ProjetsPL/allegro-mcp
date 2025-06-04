// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.responsible_producers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/responsible-producers/{id}',
  operationId: 'responsibleProducerGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_responsible_producers',
  description:
    'Use this resource to get a responsible producer for the compliance of the product with EU regulations. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      Accept: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.sale.responsibleProducers.retrieve(id, body);
};

export default { metadata, tool, handler };
