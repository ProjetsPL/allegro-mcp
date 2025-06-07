// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sale/bundles/{bundleId}',
  operationId: 'deleteOfferBundleUsingGET',
};

export const tool: Tool = {
  name: 'delete_sale_bundles',
  description:
    'Use this resource to delete offer bundle by its unique identifier. Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#usun-wybrany-zestaw" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#remove-the-selected-offer-bundle" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      bundleId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { bundleId, ...body } = args as any;
  await client.sale.bundles.delete(bundleId);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
