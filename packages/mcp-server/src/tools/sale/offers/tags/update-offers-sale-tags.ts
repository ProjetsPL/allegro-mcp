// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-tags/{tagId}',
  operationId: 'updateTagPUT',
};

export const tool: Tool = {
  name: 'update_offers_sale_tags',
  description:
    'Use this resource to update a tag. Read more: <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a> / <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>. This resource is rate limited to 1 million changes per hour.',
  inputSchema: {
    type: 'object',
    properties: {
      tagId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      hidden: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { tagId, ...body } = args as any;
  await client.sale.offers.tags.update(tagId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
