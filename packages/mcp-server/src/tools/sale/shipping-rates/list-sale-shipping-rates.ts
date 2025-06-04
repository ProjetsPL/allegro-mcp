// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.shipping_rates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/shipping-rates',
  operationId: 'getListOfShippingRatestUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_shipping_rates',
  description:
    'Use this resource to get a list of seller\'s shipping rates. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-cennik-dostaw" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-shipping-rates" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      marketplace: {
        type: 'string',
        description: 'Allows to filter shipping rates by marketplace that they are qualified for.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.shippingRates.list(body);
};

export default { metadata, tool, handler };
