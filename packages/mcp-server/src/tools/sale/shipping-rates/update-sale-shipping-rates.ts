// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.shipping_rates',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/shipping-rates/{id}',
  operationId: 'modifyShippingRatesSetUsingPUT',
};

export const tool: Tool = {
  name: 'update_sale_shipping_rates',
  description:
    'Use this resource to edit a new seller\'s shipping rates set. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-edytowac-cennik-dostaw" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-modify-shipping-rates" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'Shipping rates set ID (UUID) When creating a shipping rates set (Post) the field is ignored. It is required when updating (Put) a shipping rates.',
      },
      rates: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            deliveryMethod: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'ID of the delivery method',
                },
              },
              required: [],
            },
            firstItemRate: {
              type: 'object',
              description:
                'Rate for the first item in the parcel for the given delivery method. The rate amount and currency must comply with the shippingRatesConstraints.firstItemRate restrictions described in the delivery-methods resource.',
              properties: {
                amount: {
                  type: 'string',
                  description: 'Amount',
                },
                currency: {
                  type: 'string',
                  description: 'ISO 4217 currency code',
                },
              },
              required: [],
            },
            maxQuantityPerPackage: {
              type: 'integer',
              description: 'Maximum quantity per package for the given delivery method. Minimum value is 1.',
            },
            nextItemRate: {
              type: 'object',
              description:
                'Rate for every other item, after the first, in the same parcel for the given delivery method. The rate amount and currency must comply with the shippingRatesConstraints.nextItemRate restrictions described in the delivery-methods resource.',
              properties: {
                amount: {
                  type: 'string',
                  description: 'Amount',
                },
                currency: {
                  type: 'string',
                  description: 'ISO 4217 currency code',
                },
              },
              required: [],
            },
            maxPackageWeight: {
              type: 'object',
              description:
                'Maximum weight of a package for the given delivery method (allowed only for methods with shippingRatesConstraints.maxPackageWeight.supported set to true in the delivery-methods resource). If not set, only maxQuantityPerPackage will be used to calculate the number of packages. Please note that the weight value must be the same for both related delivery methods, i.e. with `IN_ADVANCE` and `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.',
              properties: {
                unit: {
                  type: 'string',
                  description: 'Weight unit. Currently only `KILOGRAM` is supported.',
                },
                value: {
                  type: 'string',
                  description: 'Weight value with an accuracy of three decimal places.',
                },
              },
              required: [],
            },
            shippingTime: {
              type: 'object',
              description:
                'Custom shipping time for the given delivery method (allowed only for methods with shippingRatesConstraints.shippingTime.customizable set to true in the delivery-methods resource). If not set the default shipping time specified in the delivery-methods resource is used.',
              properties: {
                from: {
                  type: 'string',
                  description: 'ISO 8601 duration format, e.g. P3D for 3 days',
                },
                to: {
                  type: 'string',
                  description: 'ISO 8601 duration format, e.g. P3D for 3 days',
                },
              },
              required: [],
            },
          },
          required: ['deliveryMethod', 'firstItemRate', 'maxQuantityPerPackage', 'nextItemRate'],
        },
      },
      lastModified: {
        type: 'string',
        description:
          'Date and time of the last modification of the set in UTC ISO 8601 format. When creating (Post) or updating (Put) a shipping rates set the field is ignored.',
      },
      name: {
        type: 'string',
        description:
          'User defined name of the shipping rates set. It may only contain: letters, numbers, hyphens, dots, commas and spaces.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.sale.shippingRates.update(id, body));
};

export default { metadata, tool, handler };
