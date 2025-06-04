// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management.shipments.create_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/shipment-management/shipments/create-commands/{commandId}',
  operationId: 'getShipmentCreationStatus',
};

export const tool: Tool = {
  name: 'get_status_shipments_shipment_management_create_commands',
  description:
    'Use this resource to get shipment creation status. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-sprawdzic-status-utworzenia-paczki" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-check-the-creation-status-of-a-shipment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return client.shipmentManagement.shipments.createCommands.getStatus(commandId);
};

export default { metadata, tool, handler };
