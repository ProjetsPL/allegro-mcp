// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_classifieds_packages',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-classifieds-packages/{offerId}',
  operationId: 'assignClassifiedPackagesUsingPUT',
};

export const tool: Tool = {
  name: 'update_sale_offer_classifieds_packages',
  description:
    'Use this resource to assign classified packages to an offer. Read more: <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#dodatkowe-opcje-promowania" target="_blank">PL</a> / <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#additional-promo-options" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      basePackage: {
        $ref: '#/$defs/classified_package',
      },
      extraPackages: {
        type: 'array',
        items: {
          $ref: '#/$defs/classified_package',
        },
      },
    },
    $defs: {
      classified_package: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The classifieds package ID.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  await client.sale.offerClassifiedsPackages.update(offerId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
