// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_modification_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-modification-commands/{commandId}/tasks',
  operationId: 'getTasksUsingGET',
};

export const tool: Tool = {
  name: 'tasks_sale_offer_modification_commands',
  description:
    'Use this resource to retrieve a detailed summary of changes introduced within one {commandId} (defaults: limit = 100, offset = 0). Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-wielu-ofert-jednoczesnie" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-many-offers" target="_blank">EN</a>. This resource is rate limited to retrieving information about 270 000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The limit of elements in the response.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return client.sale.offerModificationCommands.tasks(commandId, body);
};

export default { metadata, tool, handler };
