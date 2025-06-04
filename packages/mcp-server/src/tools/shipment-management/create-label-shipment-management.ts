// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/shipment-management/label',
  operationId: 'getShipmentLabels',
};

export const tool: Tool = {
  name: 'create_label_shipment_management',
  description:
    'Use this resource to get label for created shipment. <br/>Returned content type depends on created shipment. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-utworzyc-etykiete-na-paczke" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-create-a-label-for-shipment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      shipmentIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      cutLine: {
        type: 'boolean',
        description: 'Put additional cut lines. Only for PDF file with A4 size.',
      },
      pageSize: {
        type: 'string',
        description: 'Label page format. Only for PDF file.',
        enum: ['A4', 'A6'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.shipmentManagement.createLabel(body);
};

export default { metadata, tool, handler };
