// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management.shipments.cancel_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/shipment-management/shipments/cancel-commands',
  operationId: 'cancelShipment',
};

export const tool: Tool = {
  name: 'cancel_shipments_shipment_management_cancel_commands',
  description:
    'Use this resource to cancel parcel. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-anulowac-paczke" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-cancel-a-shipment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'object',
        properties: {
          shipmentId: {
            type: 'string',
          },
        },
        required: ['shipmentId'],
      },
      commandId: {
        type: 'string',
        description: 'Command UUID. If empty, then system generate new one.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.shipmentManagement.shipments.cancelCommands.cancel(body);
};

export default { metadata, tool, handler };
