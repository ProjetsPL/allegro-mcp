// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_variants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sale/offer-variants/{setId}',
  operationId: 'deleteVariantSet',
};

export const tool: Tool = {
  name: 'delete_sale_offer_variants',
  description:
    'Use this resource to delete variant set by id. Offers included in variant set will not be stopped or modified by this operation. Read more: <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#usun-oferte-wielowariantowa" target="_blank">PL</a> / <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#remove-a-multi-variant-offer" target="_blank">EN</a>.',
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
  await client.sale.offerVariants.delete(setId);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
