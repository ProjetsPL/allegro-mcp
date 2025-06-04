// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/tax-settings',
  operationId: 'getTaxSettingsForCategory',
};

export const tool: Tool = {
  name: 'get_tax_settings_sale',
  description:
    'Use this resource to receive tax settings for given category. Based on received settings you may set VAT tax settings for your offers. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#opcje-faktury-i-stawki-vat" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#invoice-and-vat-settings" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'An identifier of a category for which all available tax settings will be returned.',
          },
        },
        required: ['id'],
      },
      countryCode: {
        type: 'array',
        description:
          'Country code for which tax settings will be returned. If not provided settings for all countries will be returned.',
        items: {
          type: 'string',
          enum: ['PL', 'CZ', 'SK', 'HU'],
        },
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.getTaxSettings(body);
};

export default { metadata, tool, handler };
