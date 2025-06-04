// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/classified-offers-stats',
  operationId: 'classifiedOffersStatsGET',
};

export const tool: Tool = {
  name: 'get_classified_offers_stats_sale',
  description:
    'This endpoint returns daily statistics collected for a list of advertisements in a given date range. Read more: <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#statystyki-wybranych-ogloszen" target="_blank">PL</a> / <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#statistics-of-selected-classified-ads" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      date: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description:
              'The maximum date and time from which the events will be fetched in ISO 8601 format. The value should be less than the current date time. The difference between date.gte and date.lte should be less than 3 months.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description:
              'The minimum date and time from which the events will be fetched in ISO 8601 format. The value should be less than the current date time and greater than date.lte. The difference between date.gte and date.lte should be less than 3 months.',
            format: 'date-time',
          },
        },
        required: [],
      },
      offer: {
        type: 'object',
        properties: {
          id: {
            type: 'array',
            description: 'List of offer Ids, maximum 50 values.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.getClassifiedOffersStats(body);
};

export default { metadata, tool, handler };
