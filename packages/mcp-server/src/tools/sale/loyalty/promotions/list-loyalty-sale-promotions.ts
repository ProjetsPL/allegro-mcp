// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.loyalty.promotions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/loyalty/promotions',
  operationId: 'listSellerPromotionsUsingGET_1',
};

export const tool: Tool = {
  name: 'list_loyalty_sale_promotions',
  description:
    'Get a list of promotions defined by the authorized user and filtered by promotion type.\n<p>Restrictions:</p> <p>Filtering by promotion type is required.</p>\n<p>Sum of limit and offset must be equal to or lower than 50000. Limit must be equal to or lower than 5000.</p> <p>Example:</p> <p>offset = 49950 and limit = 50 will return promotions</p> <p>offset = 49950 and limit = 51 will return 422 http error</p> <p>offset = 0 and limit = 5000 will return promotions</p> <p>offset = 0 and limit = 5001 will return 422 http error</p>\n<p>Read more about: Large order discount <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-dostepne-rabaty" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-large-order-discount" target="_blank">EN</a>, Wholesale price list <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-dostepne-cenniki" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-wholesale-price-lists" target="_blank">EN</a>, Multipack <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-dostepne-rabaty-ilosciowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-promotional-sets" target="_blank">EN</a>.</p>',
  inputSchema: {
    type: 'object',
    properties: {
      promotionType: {
        type: 'string',
        description: 'Filter by promotion type.',
        enum: ['MULTIPACK', 'CROSS_MULTIPACK', 'LARGE_ORDER_DISCOUNT', 'WHOLESALE_PRICE_LIST'],
      },
      limit: {
        type: 'integer',
        description: 'Limit of promotions per page.',
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'Filter by offer id. No promotions with `OFFERS_ASSIGNED_EXTERNALLY` or `ALL_OFFERS` criteria will be returned if this parameter is present.',
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description:
          'Distance between the beginning of the document and the point from which promotions are returned.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.loyalty.promotions.list(body));
};

export default { metadata, tool, handler };
