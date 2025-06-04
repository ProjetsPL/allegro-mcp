// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.bundles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/bundles',
  operationId: 'listSellersOfferBundlesUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_bundles',
  description:
    'You can fetch page of seller\'s offer bundles using this endpoint.\n<br> Paging: <br> To move to next page, specify `page.id` parameter with value obtained in response from previous request. Number of offer bundles on single page can be specified using `limit` parameter.\n<br> Filtering: <br> Offer bundles can be filtered to bundles which contain offer specified in `offer.id` parameter. Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-liste-zestawow-ofert" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-offer-bundles-list" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Limit of bundles per page.',
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Filter bundles which contains offer.',
          },
        },
        required: [],
      },
      page: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID of page which will be retrieved.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.bundles.list(body);
};

export default { metadata, tool, handler };
