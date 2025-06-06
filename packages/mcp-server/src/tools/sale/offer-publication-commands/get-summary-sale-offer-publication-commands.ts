// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_publication_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-publication-commands/{commandId}',
  operationId: 'getPublicationReportUsingGET',
};

export const tool: Tool = {
  name: 'get_summary_sale_offer_publication_commands',
  description:
    'Use this resource to retrieve information about the offer listing statuses. You will receive a summary with a number of correctly listed offers and errors. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#zestawienie-zadan" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#task-list" target="_blank">EN</a>. This resource is rate limited to retrieving information about 270 000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerPublicationCommands.getSummary(commandId));
};

export default { metadata, tool, handler };
