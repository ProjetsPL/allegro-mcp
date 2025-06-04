// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offers/{offerId}/tags',
  operationId: 'listAssignedOfferTagsGET',
};

export const tool: Tool = {
  name: 'list_0_offers_sale_tags',
  description:
    'Use this resource to get a list of tags assigned to offer. Read more: <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a> / <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.sale.offers.tags.list0(offerId);
};

export default { metadata, tool, handler };
