// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/offer-tags',
  operationId: 'createTagPOST_1',
};

export const tool: Tool = {
  name: 'create_offers_sale_tags',
  description:
    'Use this resource to create a new tag. You can create up to 100 tags. Read more: <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a> / <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await client.sale.offers.tags.create(body));
};

export default { metadata, tool, handler };
