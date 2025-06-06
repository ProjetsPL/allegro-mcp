// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.advance_ship_notices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/advance-ship-notices/{id}/labels',
  operationId: 'getAdvanceShipNoticeLabels',
};

export const tool: Tool = {
  name: 'get_labels_fulfillment_advance_ship_notices',
  description:
    'Use this resource to get labels for Advance Ship Notice after being created with "create labels command". Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#wygeneruj-oznaczenia-na-kartony" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#create-labels-for-boxes" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      accept: {
        type: 'string',
        enum: ['application/pdf', 'x-application/zpl'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.fulfillment.advanceShipNotices.getLabels(id, body));
};

export default { metadata, tool, handler };
