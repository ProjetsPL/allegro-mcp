// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.delivery_settings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/delivery-settings',
  operationId: 'putSaleDeliverySettings',
};

export const tool: Tool = {
  name: 'update_sale_delivery_settings',
  description:
    'Use this resource to modify the delivery settings declared by the seller. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-edytowac-ustawienia-dostawy" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-edit-delivery-settings" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      customCost: {
        type: 'object',
        description: 'Policy of custom delivery cost.',
        properties: {
          allowed: {
            type: 'boolean',
            description: 'If true the customer can enter a custom shipping cost.',
          },
        },
        required: ['allowed'],
      },
      joinPolicy: {
        type: 'object',
        description: 'Policy of calculating delivery costs.',
        properties: {
          strategy: {
            type: 'string',
            description:
              'Strategy used to calculate delivery cost for items from offers with different delivery costs.\nThe possible values:\n  * `MAX` - The buyer will pay for the most expensive delivery\n  * `MIN` - The buyer will pay for the cheapest delivery\n  * `SUM` - Items will be sent in separate parcels and delivery costs will be sum of delivery costs for each item.',
            enum: ['MIN', 'MAX', 'SUM'],
          },
        },
        required: ['strategy'],
      },
      abroadFreeDelivery: {
        type: 'object',
        description:
          'A minimum total order amount required to qualify for free foreign delivery (for example for allegro-cz marketplace, all delivery countries other than Czechia are treated as foreign). If you do not want to set free foreign delivery threshold, do not set this value.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'ISO 4217 currency code. The correct currency code for a given marketplace should be set, e.g. PLN for allegro-pl, CZK for allegro-cz.',
          },
        },
        required: ['amount', 'currency'],
      },
      freeDelivery: {
        type: 'object',
        description:
          'A minimum total order amount required to qualify for free domestic delivery (for example for allegro-cz marketplace, only Czechia is treated as domestic). If you do not want to set free domestic delivery threshold, do not set this value.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'ISO 4217 currency code. The correct currency code for a given marketplace should be set, e.g. PLN for allegro-pl, CZK for allegro-cz.',
          },
        },
        required: ['amount', 'currency'],
      },
      marketplace: {
        type: 'object',
        description:
          'The marketplace for which delivery settings will be modified. By default (if the marketplace parameter is not set) the marketplace on which the seller has registered is used. However, we recommend that the marketplace parameter should always be explicitly set.',
        properties: {
          id: {
            type: 'string',
            description: 'Marketplace id',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.deliverySettings.update(body));
};

export default { metadata, tool, handler };
