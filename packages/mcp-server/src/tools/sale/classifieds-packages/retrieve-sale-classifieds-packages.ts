// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.classifieds_packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/classifieds-packages/{packageId}',
  operationId: 'getClassifiedPackageConfigurationUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_classifieds_packages',
  description:
    'Use this resource to retrieve the configuration of a classifieds package. Read more: <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#lista-pakietow-i-opcji-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#list-of-promo-options" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      packageId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { packageId, ...body } = args as any;
  return client.sale.classifiedsPackages.retrieve(packageId);
};

export default { metadata, tool, handler };
