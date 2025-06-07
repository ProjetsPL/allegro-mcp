// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.advance_ship_notices',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/fulfillment/advance-ship-notices/{id}',
  operationId: 'deleteAdvanceShipNotice',
};

export const tool: Tool = {
  name: 'delete_fulfillment_advance_ship_notices',
  description:
    'Use this resource to delete an Advance Ship Notice. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-usunac-awizo" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-delete-advance-ship-notice" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.fulfillment.advanceShipNotices.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
