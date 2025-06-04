// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.removal.preferences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/removal/preferences',
  operationId: 'getFulfillmentRemovalPreferences',
};

export const tool: Tool = {
  name: 'get_removal_fulfillment_preferences',
  description:
    'Use this resource to read your current removal preference. Removal preference is associated with system removal order at the moment of removal order is created. It means there can be not yet fulfilled removal orders associated with previously set removal preference.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return client.fulfillment.removal.preferences.get();
};

export default { metadata, tool, handler };
