// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.products.change_proposals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/products/change-proposals/{changeProposalId}',
  operationId: 'getProductChangeProposal',
};

export const tool: Tool = {
  name: 'retrieve_products_sale_change_proposals',
  description:
    'Use this resource to retrieve all data of the particular product changes proposal. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-zglosic-blad-w-produkcie" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-report-incorrect-data-in-a-product" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      changeProposalId: {
        type: 'string',
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { changeProposalId, ...body } = args as any;
  return asTextContentResult(await client.sale.products.changeProposals.retrieve(changeProposalId, body));
};

export default { metadata, tool, handler };
