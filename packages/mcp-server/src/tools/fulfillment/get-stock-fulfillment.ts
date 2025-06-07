// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/stock',
  operationId: 'getFulfillmentStock',
};

export const tool: Tool = {
  name: 'get_stock_fulfillment',
  description:
    'Use this resource to get a list of the products belonging to the seller, which are in Allegro Warehouse. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-pobrac-aktualne-stany-magazynowe" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#get-available-stock" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      asnStatus: {
        type: 'string',
        description:
          "Filtering search results by ASN status. Following values are allowed: SUBMITTED - Advanced Ship Notice document has been submitted and it contains a particular product. Only the products that have ASN with products on it are returned. NOT_FOUND - Advanced Ship Notice that contains a particular product was not found. It has not been submitted, may be expired, or products have already been delivered to the warehouse. Only the products that don't have related ASN with products on it are returned.",
        enum: ['SUBMITTED', 'NOT_FOUND'],
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of elements in response. Ignored for text/csv content type.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response. Ignored for text/csv content type.',
      },
      outOfStockInFrom: {
        type: 'integer',
        description: 'Filter by products with outOfStockIn greater than or equal.',
      },
      outOfStockInTo: {
        type: 'integer',
        description: 'Filter by products with outOfStockIn less than or equal.',
      },
      phrase: {
        type: 'string',
        description: 'Filtering search results by product name.',
      },
      productAvailability: {
        type: 'array',
        description: 'Filtering search results by availability.',
        items: {
          type: 'string',
          enum: ['SUFFICIENT', 'UNAVAILABLE', 'LOW'],
        },
      },
      productId: {
        type: 'string',
        description:
          'Filtering search results by fulfillment product identifier. Ignored for text/csv content type.',
      },
      productStatus: {
        type: 'string',
        description: 'Filtering search results by status.',
        enum: ['UNFULFILLABLE'],
      },
      sort: {
        type: 'string',
        description:
          'Defines how elements are sorted in response. Minus sign can be added to imply descending sort order. Ignored for text/csv content type.\nPossible values for the "sort" parameter:\n  * -available - sorting by quantity of available products (descending)\n  * available - sorting by quantity of available products (ascending)\n  * -unfulfillable - sorting by quantity of unfulfillable products (descending)\n  * unfulfillable - sorting by quantity of unfulfillable products (ascending)\n  * -name - sorting by product’s name (descending)\n  * name - sorting by product’s name (ascending)\n  * lastWeekSalesAverage - sorting by product last week average sales (ascending)\n  * -lastWeekSalesAverage - sorting by product last week average sales (descending)\n  * reserve - sorting by reserve.outOfStockIn field (ascending)\n  * -reserve - sorting by reserve.outOfStockIn field (descending)\n  * lastThirtyDaysSalesSum - sorting by product last month sum sales (ascending)\n  * -lastThirtyDaysSalesSum - sorting by product last month sum sales (descending)\n  * storageFee - sorting by storage fee (ascending). The order by fee status is: NOT_APPLICABLE, then INCLUDED_IN_STORAGE_FEE, then PREDICTION, then CHARGED ordered by amountGross ascending.\n  * -storageFee - sorting by storage fee (descending). The order by fee status is: CHARGED ordered by amountGross descending, then PREDICTION, then INCLUDED_IN_STORAGE_FEE, then NOT_APPLICABLE.',
        enum: [
          'available',
          '-available',
          'unfulfillable',
          '-unfulfillable',
          'name',
          '-name',
          'lastWeekSalesAverage',
          '-lastWeekSalesAverage',
          'reserve',
          '-reserve',
          'lastThirtyDaysSalesSum',
          '-lastThirtyDaysSalesSum',
          'storageFee',
          '-storageFee',
        ],
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.fulfillment.getStock(body));
};

export default { metadata, tool, handler };
