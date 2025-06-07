// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management.shipments.cancel_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/shipment-management/shipments/cancel-commands/{commandId}',
  operationId: 'getShipmentCancellationStatus',
};

export const tool: Tool = {
  name: 'get_status_shipments_shipment_management_cancel_commands',
  description:
    'Use this resource to get parcel cancellation status. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-sprawdzic-status-anulowania-paczki" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-check-shipment-cancellation-status" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return asTextContentResult(await client.shipmentManagement.shipments.cancelCommands.getStatus(commandId));
};

export default { metadata, tool, handler };
