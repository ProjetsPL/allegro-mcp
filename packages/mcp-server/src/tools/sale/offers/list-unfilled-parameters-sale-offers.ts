// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offers/unfilled-parameters',
  operationId: 'getOffersUnfilledParametersUsingGET_1',
};

export const tool: Tool = {
  name: 'list_unfilled_parameters_sale_offers',
  description:
    'Use this resource to get information about required parameters or parameters scheduled to become required that are not filled in offers. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-nieuzupelnione-parametry-w-ofertach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-unfilled-parameters-in-offers" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The limit of elements in the response.',
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'List of offer ids. If empty all offers with unfilled parameters will be returned.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
      parameterType: {
        type: 'string',
        description: 'Filter by parameter type.',
        enum: ['REQUIRED', 'REQUIREMENT_PLANNED'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.offers.listUnfilledParameters(body));
};

export default { metadata, tool, handler };
