// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sale/offers/{offerId}',
  operationId: 'deleteOfferUsingDELETE',
};

export const tool: Tool = {
  name: 'delete_sale_offers',
  description:
    'Use this resource to delete a draft offer. Read more: <a href="../../news/nowy-zasob-do-usuwania-draftow-ofert-aMDnGka2RuL" target="_blank">PL</a> / <a href="../../news/new-resource-draft-delete-yPy9lq6myh0" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  await client.sale.offers.delete(offerId);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
