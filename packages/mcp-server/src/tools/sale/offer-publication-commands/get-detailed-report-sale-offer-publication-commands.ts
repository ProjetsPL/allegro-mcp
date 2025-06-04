// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_publication_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-publication-commands/{commandId}/tasks',
  operationId: 'getPublicationTasksUsingGET',
};

export const tool: Tool = {
  name: 'get_detailed_report_sale_offer_publication_commands',
  description:
    'Use this resource to retrieve information about the offer statuses on the site (Defaults: limit = 100, offset = 0). Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#informacje-o-publikacji" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#information-about-publication" target="_blank">EN</a>. This resource is rate limited to retrieving information about 270 000 offer changes per minute.',
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
  return client.sale.offerPublicationCommands.getDetailedReport(commandId, body);
};

export default { metadata, tool, handler };
