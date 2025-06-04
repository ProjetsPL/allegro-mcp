// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/bundles/{bundleId}',
  operationId: 'getOfferBundleUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_bundles',
  description:
    'Use this resource to retrieve offer bundle by its unique identifier. Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-szczegoly-wybranego-zestawu" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-details-of-the-selected-offer-bundle" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      bundleId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { bundleId, ...body } = args as any;
  return client.sale.bundles.retrieve(bundleId);
};

export default { metadata, tool, handler };
