// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/bundles',
  operationId: 'createOfferBundleUsingPOST',
};

export const tool: Tool = {
  name: 'create_sale_bundles',
  description:
    'You can create <a href="https://help.allegro.com/sell/en/a/how-to-create-offer-bundles-rj9eAL2XnhK?marketplaceId=allegro-pl" target="_blank">offer bundle</a> using this endpoint. Bundle has to contain at least two offers and at least one of them has to be set as an entry point. Bundle will be shown on offers\' pages which are marked as entry points. You can also specify how many units of each offer will be in bundle using `requiredQuantity` property.\n<br> Additionally, discount can be specified for each marketplace separately. If you do not want to set discount, set `discounts` property to `null` or empty array. Also, you do not have to specify discount on all marketplaces. Fill marketplaces in \'discounts\' array accordingly to your needs.\n<br> Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#utworz-zestaw-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#create-an-offer-bundle" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offers: {
        type: 'array',
        description: 'Offers that will make up the bundle.',
        items: {
          $ref: '#/$defs/bundled_offer',
        },
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
      bundled_offer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Offer ID',
          },
          entryPoint: {
            type: 'boolean',
            description: 'Set if bundle should be shown on offer page.',
          },
          requiredQuantity: {
            type: 'integer',
            description: 'How many units of this offer will be in bundle.',
          },
        },
        required: ['id', 'entryPoint', 'requiredQuantity'],
      },
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

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.bundles.create(body);
};

export default { metadata, tool, handler };
