// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offers',
  operationId: 'searchOffersUsingGET',
};

export const tool: Tool = {
  name: 'list_sale_offers',
  description:
    'Use this resource to get the list of the seller\'s offers. You can use different query parameters to filter the list. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-moje-oferty-w-rest-api" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#list-of-offers" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      afterSalesServices: {
        type: 'object',
        properties: {
          returnPolicy: {
            type: 'string',
            description: 'The ID of return policy. Returns offers with given return policy ID.',
          },
        },
        required: [],
      },
      b2b: {
        type: 'object',
        properties: {
          buyableOnlyByBusiness: {
            type: 'boolean',
            description: 'Allows to search for offers buyable only by businesses.',
          },
        },
        required: [],
      },
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The identifier of the category, where you want to search for offers.',
          },
        },
        required: [],
      },
      delivery: {
        type: 'object',
        properties: {
          shippingRates: {
            type: 'boolean',
            description: 'Allows to filter offers by existence of shipping rates ID.',
          },
        },
        required: [],
      },
      external: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description:
              "The ID from the client's external system. Passing more than one value will search for offers with any of the given IDs. By default no ID is included. Example: `external.id=1233&external.id=1234` - returns offers with ID `1233` or `1234`. Single ID length shouldn't exceed 100 characters.",
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      fundraisingCampaign: {
        type: 'object',
        properties: {
          id: {
            type: 'boolean',
            description: 'Allows to search for charity or commercial offers.',
          },
        },
        required: [],
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of offers returned in the response.',
      },
      name: {
        type: 'string',
        description: 'The text to search in the offer title.',
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'Offer ID.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      offset: {
        type: 'integer',
        description:
          'Index of the first returned offer from all search results. Maximum sum of offset and limit is 10 000 000.',
      },
      product: {
        type: 'object',
        properties: {
          id: {
            type: 'boolean',
            description: 'Allows to filter offers by existence of product ID.',
          },
        },
        required: [],
      },
      productizationRequired: {
        type: 'boolean',
        description: 'Allows to search for offers from categories where productization is required.',
      },
      publication: {
        type: 'object',
        properties: {
          marketplace: {
            type: 'string',
            description:
              'Either the base marketplace or an additional marketplace of the offer.\n\nWhen passing the parameter `publication.marketplace`, searches for offers with the given marketplace as either its base marketplace or one of its additional marketplaces. When the parameter is omitted, searches for offers with all marketplaces.\n\nIn addition to searching, passing the parameter also influences the functionality of other query parameter by searching and sorting by data (e.g. price) on the given marketplace.',
          },
          status: {
            type: 'array',
            description:
              'The publication status of the offer. Passing more than one value will search for offers with any of the given statuses. By default all statuses are included. Example: `publication.status=INACTIVE&publication.status=ACTIVE` - returns offers with status `INACTIVE` or `ACTIVE`.',
            items: {
              type: 'string',
              enum: ['INACTIVE', 'ACTIVE', 'ACTIVATING', 'ENDED'],
            },
          },
        },
        required: [],
      },
      sellingMode: {
        type: 'object',
        properties: {
          format: {
            type: 'array',
            description:
              "The offer's selling format. Passing more than one value will search for offers with any of the given formats. By default all formats are included. Example: `sellingMode.format=BUY_NOW&sellingMode.format=ADVERTISEMENT` - returns offers with with format `BUY_NOW` or `ADVERTISEMENT`.",
            items: {
              type: 'string',
              enum: ['BUY_NOW', 'ADVERTISEMENT', 'AUCTION'],
            },
          },
          price: {
            type: 'number',
            description:
              'The upper threshold of price.\n\nIf additionally a `publication.marketplace` is provided, searches using the price on the given marketplace.',
          },
          priceAutomation: {
            type: 'boolean',
            description:
              "Allows to filter offers by existence of price automation rule ID. Passing 'false' will return offers with any price automation rule, passing 'true' will return offers without any price automation rules.\n\nIf additionally a `publication.marketplace` is provided, searches using the price automation rule on the given marketplace.",
          },
        },
        required: [],
      },
      sort: {
        type: 'string',
        description:
          "The results' sorting order. No prefix in the value means ascending order. `-` prefix means descending order. If you don't provide the sort parameter, the list is sorted by offer creation time, descending.\n\nIf additionally a `publication.marketplace` is provided, sorts by price and `stock.sold` using the data on the given marketplace.",
        enum: [
          'sellingMode.price.amount',
          '-sellingMode.price.amount',
          'stock.sold',
          '-stock.sold',
          'stock.available',
          '-stock.available',
        ],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.offers.list(body));
};

export default { metadata, tool, handler };
