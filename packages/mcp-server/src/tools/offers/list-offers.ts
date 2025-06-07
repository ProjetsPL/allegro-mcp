// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/offers/listing',
  operationId: 'getListing',
};

export const tool: Tool = {
  name: 'list_offers',
  description:
    '<a href="../../listing/" target="_blank">Access for verified applications only</a>. Use this resource to get a list of offers based on the provided query parameters. At least one of: phrase, seller.id or category.id is required. Additional available parameters vary depending on category.id. The parameters are defined in the filters entity.\nChanging the marketplace, country of delivery, currency or language may impact the availability of offers and filters. Note that requests for closed offers may be limited.\n\nRead more: <a href="../../tutorials/jak-wyszukiwac-przegladac-oferty-ZM9YAKAwgfk" target="_blank">PL</a> / <a href="../../tutorials/how-to-search-and-browse-offers-XxWm2ykMYHl" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
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
      currency: {
        type: 'string',
        description:
          'Currency of the offer prices.\n*Default value* : depends on marketplace, for allegro-pl: `PLN`, for allegro-cz: `CZK`, for allegro-sk: `EUR`.\nCheck endpoint GET /marketplaces for acceptable currency values.',
      },
      'Dynamic filters': {
        type: 'object',
        description:
          'You can filter and customize your search results to find exactly what you need by applying filters ids and their dictionary values to query according to the flowing pattern: id=value. When the filter definition looks like:\n  ````\n    {\n      "id": "parameter.11323",\n      "type": "MULTI",\n      "name": "Stan",\n      "values": [{\n          "value": "11323_1",\n          "name": "nowe",\n          "count": 21,\n          "selected": false\n        },\n        {\n          "value": "11323_2",\n          "name": "używane",\n          "count": 157,\n          "selected": false\n        },\n        {\n          "value": "11323_238066",\n          "name": "po zwrocie",\n          "count": 1,\n          "selected": false\n        }\n      ]\n    }\n  ````\nYou can use \'Stan\' filter to query results, i.e.:\n  * `parameter.11323=11323_1` for "nowe"\n  * `parameter.11323=11323_2` for "używane"\n  * `parameter.11323=11323_238066` for "po zwrocie".',
      },
      fallback: {
        type: 'boolean',
        description:
          'Defines the behaviour of the search engine when no results with exact phrase match are found:\n\n  - *true* - related (not exact) results are returned,\n  - *false* - empty results are returned.',
      },
      include: {
        type: 'string',
        description:
          'Specify parts of the response that should be included in the output. Allowed values are the names of top level entities and *all* as an alias to all entities. By default, all top level entities are included. Use `-` prefix to exclude an entity.\nExample:\n`include=-all&include=filters&include=sort` - returns only filters and sort entities.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of offers in a response.',
      },
      marketplaceId: {
        type: 'string',
        description:
          'Id of a marketplace where offers are visible.\n*Acceptable values* : `allegro-pl`, `allegro-cz`, `allegro-sk`, `allegro-hu`.',
      },
      offset: {
        type: 'integer',
        description:
          'Index of the first returned offer from all search results. Max offset is `600 - <limit>`.',
      },
      phrase: {
        type: 'string',
        description:
          'The search phrase. The phrase is searched in different fields of the offers depending on the value of the `searchMode` parameter.',
      },
      searchMode: {
        type: 'string',
        description:
          'Defines where the given phrase should be searched in. Allowed values:\n\n  - *REGULAR* - searching for a phrase in the title,\n  - *CLOSED* - searching for a phrase in the title of closed offers. Available only for `allegro-pl` marketplace.',
        enum: ['REGULAR', 'CLOSED'],
      },
      seller: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'The identifier of a seller, to limit the results to offers from this seller. May be provided more than once. Should not be provided when seller.login is given.',
          },
          login: {
            type: 'string',
            description:
              'The login of a seller, to limit the results to offers from this seller. May be provided more than once. Should not be provided when seller.id is given.',
          },
        },
        required: [],
      },
      shipping: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'Expected language of messages.',
          },
        },
        required: [],
      },
      sort: {
        type: 'string',
        description:
          'Search results sorting order. `+` or no prefix in the value means ascending order. `-` prefix means descending order.',
        enum: [
          'relevance',
          '+price',
          '-price',
          '+withDeliveryPrice',
          '-withDeliveryPrice',
          '+endTime',
          '-startTime',
        ],
      },
      'Accept-Language': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.offers.list(body));
};

export default { metadata, tool, handler };
