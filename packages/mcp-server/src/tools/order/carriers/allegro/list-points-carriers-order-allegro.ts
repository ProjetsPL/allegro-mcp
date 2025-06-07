// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.carriers.allegro',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/carriers/ALLEGRO/points',
  operationId: 'getAllegroPickupDropOffPointsGET',
};

export const tool: Tool = {
  name: 'list_points_carriers_order_allegro',
  description:
    'Get a list of Allegro pickup drop off points. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-liste-punktow-allegro" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-list-of-allegro-pickup-drop-off-points" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      carriers: {
        type: 'array',
        description:
          'List of carrier ids to filter the drop off/pick up points to only the ones where any of the listed carriers operate. In case of an empty list, all points are returned.',
        items: {
          $ref: '#/$defs/allegro_carrier',
        },
      },
      'If-Modified-Since': {
        type: 'string',
      },
    },
    $defs: {
      allegro_carrier: {
        type: 'string',
        enum: ['UPS', 'ALLEGRO_ONE_KURIER', 'DPD'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.order.carriers.allegro.listPoints(body));
};

export default { metadata, tool, handler };
