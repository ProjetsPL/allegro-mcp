// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.delivery_settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/delivery-settings',
  operationId: 'getSaleDeliverySettings',
};

export const tool: Tool = {
  name: 'retrieve_sale_delivery_settings',
  description:
    'Use this resource to get the delivery settings declared by the seller. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-ustawienia-dostawy" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-get-delivery-settings" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      marketplace: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'Marketplace for which delivery settings will be returned. By default (if the marketplace parameter is not set) the marketplace on which the seller has registered is used. However, we recommend that the marketplace.id query parameter should always be explicitly set.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.deliverySettings.retrieve(body));
};

export default { metadata, tool, handler };
