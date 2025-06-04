// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_variants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-variants',
  operationId: 'getVariantSets',
};

export const tool: Tool = {
  name: 'list_sale_offer_variants',
  description:
    'Use this resource to get created variant sets. The returned variant sets are ordered by name. Read more: <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#pobierz-liste-ofert-wielowariantowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#retrieve-a-multi-variant-offer" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Maximum number of returned variant sets.',
      },
      offset: {
        type: 'integer',
        description: 'Index of first returned variant set.',
      },
      query: {
        type: 'string',
        description: 'Filter variant sets by name or offer id.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.offerVariants.list(body);
};

export default { metadata, tool, handler };
