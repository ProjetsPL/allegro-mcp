// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.carriers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/carriers/{carrierId}/tracking',
  operationId: 'getParcelTrackingUsingGET',
};

export const tool: Tool = {
  name: 'get_tracking_order_carriers',
  description:
    'Get tracking history for parcels. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-historie-statusow-przesylek" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-parcels-statuses-history" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      carrierId: {
        type: 'string',
      },
      waybill: {
        type: 'array',
        description:
          'Waybill number (parcel tracking number). Example: `waybill=AAA0000E5D201&waybill=BBB00000E5D202` - returns parcel tracking history for `AAA0000E5D201` as well as for `BBB00000E5D202`.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { carrierId, ...body } = args as any;
  return asTextContentResult(await client.order.carriers.getTracking(carrierId, body));
};

export default { metadata, tool, handler };
