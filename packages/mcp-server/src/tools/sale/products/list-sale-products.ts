// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/products',
  operationId: 'getSaleProducts',
};

export const tool: Tool = {
  name: 'list_sale_products',
  description:
    'Use this resource to get a list of products according to provided parameters. At least ean or phrase parameter is required. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-znalezc-produkt" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-find-a-product" target="_blank">EN</a>. This resource is limited with Leaky Bucket mechanism, read more <a href="../../tutorials/informacje-podstawowe-b21569boAI1#ograniczenie-liczby-zapytan-limity" target="_blank">PL</a> / <a href="../../tutorials/basic-information-VL6YelvVKTn#limiting-the-number-of-queries-limits" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'The category identifier to filter results. This can only be used when searching by phrase.',
          },
        },
        required: [],
      },
      'Dynamic filters': {
        type: 'object',
        description:
          'You can filter and customize your search results to find exactly what you need by applying filters ids and their dictionary values to query according to the flowing pattern: id=value. When the filter definition looks like:\n  ````\n  {\n    "id": "127448",\n    "name": "Kolor",\n    "type": "SINGLE",\n    "values": [\n      {\n        "name": "biały",\n        "value": "127448_2"\n      },\n      {\n        "name": "czarny",\n        "value": "127448_1"\n      }\n    ]\n  }\n  ````\nYou can use \'Kolor\' filter to query results, i.e.:\n  * `127448=127448_2` for "biały"\n  * `127448=127448_1` for "czarny".',
      },
      ean: {
        type: 'string',
        description:
          'The EAN values can include EAN, ISBN, and UPC identifier types. Parameter is depracated and will be removed in the future. Please use combination of phrase and mode (`GTIN`) parameters instead.',
      },
      includeDrafts: {
        type: 'boolean',
        description: 'Include products in draft state.',
      },
      language: {
        type: 'string',
        description:
          'Language indicates the language for searching products. Allows to specify the language of the given phrase.',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
      mode: {
        type: 'string',
        description:
          "Search mode. If not specified, we are searching by GTIN, MPN, product's name, parameters, etc.\n - `GTIN` - restricts the search filtering to GTINs (Global Trade Item Number), e.g. EAN, ISBN, UPC.\n - `MPN` - restricts the search filtering to MPNs (Manufacturer Part Number).",
        enum: ['GTIN', 'MPN'],
      },
      page: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'A "cursor" to the next set of results.',
          },
        },
        required: [],
      },
      phrase: {
        type: 'string',
        description: 'Search phrase.',
      },
      searchFeatures: {
        type: 'string',
        description:
          "Enables additional search options: - *SIMILAR_CATEGORIES* - searching in the indicated category (category.id) and in 'similar categories' (works only if category.id is a leaf category).",
        enum: ['SIMILAR_CATEGORIES'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.products.list(body);
};

export default { metadata, tool, handler };
