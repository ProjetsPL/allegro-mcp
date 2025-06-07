// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.return_policies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/after-sales-service-conditions/return-policies/{returnPolicyId}',
  operationId: 'getAfterSalesServiceReturnPolicyUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_after_sales_service_conditions_return_policies',
  description:
    'Use this resource to get a return policy details. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-zwrotow-przypisane-do-konta" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-return-policies-assigned-to-the-account" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      returnPolicyId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { returnPolicyId, ...body } = args as any;
  return asTextContentResult(
    await client.afterSalesServiceConditions.returnPolicies.retrieve(returnPolicyId),
  );
};

export default { metadata, tool, handler };
