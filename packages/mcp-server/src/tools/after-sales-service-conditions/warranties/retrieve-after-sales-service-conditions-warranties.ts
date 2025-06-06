// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.warranties',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/after-sales-service-conditions/warranties/{warrantyId}',
  operationId: 'getAfterSalesServiceWarrantyUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_after_sales_service_conditions_warranties',
  description:
    'Use this resource to get a warranty details. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-informacje-o-gwarancjach-przypisanych-do-konta" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-warranties-assigned-to-the-account" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      warrantyId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { warrantyId, ...body } = args as any;
  return asTextContentResult(await client.afterSalesServiceConditions.warranties.retrieve(warrantyId));
};

export default { metadata, tool, handler };
