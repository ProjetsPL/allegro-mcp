// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/shipment-management/delivery-services',
  operationId: 'getDeliveryServices',
};

export const tool: Tool = {
  name: 'list_delivery_services_shipment_management',
  description:
    'Use this resource to get delivery services available for user. It returns services provided by Allegro and contracts with carriers owned by user and configured by GUI. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-liste-uslug-dostawy" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-a-list-of-delivery-services" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return client.shipmentManagement.listDeliveryServices();
};

export default { metadata, tool, handler };
