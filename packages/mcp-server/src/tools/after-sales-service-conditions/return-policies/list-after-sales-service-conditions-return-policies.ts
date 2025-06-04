// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.return_policies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/after-sales-service-conditions/return-policies',
  operationId: 'getPublicSellerListingUsingGET_1',
};

export const tool: Tool = {
  name: 'list_after_sales_service_conditions_return_policies',
  description:
    'Use this resource to get seller return policies listing. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-zwrotow-przypisane-do-konta" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-return-policies-assigned-to-the-account" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The limit of elements in the response.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.afterSalesServiceConditions.returnPolicies.list(body);
};

export default { metadata, tool, handler };
