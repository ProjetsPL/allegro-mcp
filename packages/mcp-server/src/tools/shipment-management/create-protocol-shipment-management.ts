// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/shipment-management/protocol',
  operationId: 'getShipmentProtocol',
};

export const tool: Tool = {
  name: 'create_protocol_shipment_management',
  description:
    'Protocol availability depends on Carrier. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-protokol-nadania-przesylek" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-shipment-protocol" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      shipmentIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.shipmentManagement.createProtocol(body));
};

export default { metadata, tool, handler };
