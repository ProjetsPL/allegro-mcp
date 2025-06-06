// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.return_policies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/after-sales-service-conditions/return-policies/{returnPolicyId}',
  operationId: 'deleteAfterSalesServiceReturnPolicyUsingDELETE',
};

export const tool: Tool = {
  name: 'delete_after_sales_service_conditions_return_policies',
  description: 'Use this resource to delete a return policy definition.',
  inputSchema: {
    type: 'object',
    properties: {
      returnPolicyId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { returnPolicyId, ...body } = args as any;
  return client.afterSalesServiceConditions.returnPolicies.delete(returnPolicyId);
};

export default { metadata, tool, handler };
