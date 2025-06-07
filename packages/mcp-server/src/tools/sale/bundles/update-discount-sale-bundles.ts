// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/bundles/{bundleId}/discount',
  operationId: 'updateOfferBundleDiscountUsingPUT',
};

export const tool: Tool = {
  name: 'update_discount_sale_bundles',
  description:
    'Use this resource to update discount per marketplaces associated with bundle specified by its unique identifier. This will override currently set discounts for all marketplaces, so the unchanged discounts also must be specified in request. In case discount for marketplace is not specified in request it will be deleted. Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#zmien-rabat-przypisany-do-wybranego-zestawu" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#change-the-discount-for-the-selected-offer-bundle" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      bundleId: {
        type: 'string',
      },
      discounts: {
        type: 'array',
        description:
          "Discounts on marketplaces. Can be null or empty if bundle shouldn't have discount on any marketplace.",
        items: {
          $ref: '#/$defs/bundle_discount',
        },
      },
    },
    $defs: {
      bundle_discount: {
        type: 'object',
        properties: {
          amount: {
            type: 'string',
            description: 'Discount value.',
          },
          currency: {
            type: 'string',
            description:
              'Discount currency as a 3-letter code in accordance with <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a> standard. Has to be in base currency of specified marketplace.',
          },
          marketplace: {
            $ref: '#/$defs/bundle_marketplace',
          },
        },
        required: ['amount', 'currency', 'marketplace'],
      },
      bundle_marketplace: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'Marketplace ID. Available marketplaces can be determined using <a href="#operation/marketplacesGET">GET /marketplaces</a>.',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { bundleId, ...body } = args as any;
  return asTextContentResult(await client.sale.bundles.updateDiscount(bundleId, body));
};

export default { metadata, tool, handler };
