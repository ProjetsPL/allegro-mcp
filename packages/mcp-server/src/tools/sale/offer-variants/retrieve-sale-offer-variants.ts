// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_variants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-variants/{setId}',
  operationId: 'getVariantSet',
};

export const tool: Tool = {
  name: 'retrieve_sale_offer_variants',
  description:
    'Use this resource to get variant set by set id. Read more: <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#edytuj-oferte-wielowariantowa" target="_blank">PL</a> / <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#update-a-multi-variant-offer" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      setId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { setId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerVariants.retrieve(setId));
};

export default { metadata, tool, handler };
