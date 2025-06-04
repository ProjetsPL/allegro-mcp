// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.advance_ship_notices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/advance-ship-notices',
  operationId: 'getAdvanceShipNotices',
};

export const tool: Tool = {
  name: 'list_fulfillment_advance_ship_notices',
  description:
    'Use this resource to get a list of Advance Ship Notices. The list is ordered by **createdAt** property. Default **offset** is 0, default **limit** is 50. A list can be filtered by statuses. Multiple status query parameters are allowed. In such cases, filters are joined with **OR** logical operator. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-przegladac-utworzone-awizo" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-get-created-advance-ship-notices" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Maximum number of elements in response.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
      status: {
        type: 'array',
        description: 'A status of the Advance Ship Notices in the response.',
        items: {
          $ref: '#/$defs/advance_ship_notice_status',
        },
      },
    },
    $defs: {
      advance_ship_notice_status: {
        type: 'string',
        description: 'The Advance Ship Notice Status.',
        enum: ['DRAFT', 'IN_TRANSIT', 'UNPACKING', 'COMPLETED', 'CANCELLED'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.fulfillment.advanceShipNotices.list(body);
};

export default { metadata, tool, handler };
