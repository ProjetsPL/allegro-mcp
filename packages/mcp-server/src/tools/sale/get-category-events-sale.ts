// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/category-events',
  operationId: 'getCategoryEventsUsingGET_1',
};

export const tool: Tool = {
  name: 'get_category_events_sale',
  description:
    'Use this resource to get information about changes in categories. It returns changes that occurred in the last 3 months.\nAt present we support the following changes:\n  - CATEGORY_CREATED - new category was created.\n  - CATEGORY_RENAMED - category name has been changed.\n  - CATEGORY_MOVED - category has been moved to a different place in category tree, category parent id field is changed.\n  - CATEGORY_DELETED - category is no longer available, category from redirectCategory field should be used instead.\n\n  Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#dziennik-zmian-w-kategoriach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#event-journal-in-categories" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description:
          'The ID of the last seen event. Changes that occurred after the given event will be returned.',
      },
      limit: {
        type: 'integer',
        description: 'The number of events that will be returned in the response.',
      },
      type: {
        type: 'array',
        description:
          'The types of events that will be returned in the response. All types of events are returned by default.',
        items: {
          type: 'string',
          enum: ['CATEGORY_CREATED', 'CATEGORY_RENAMED', 'CATEGORY_MOVED', 'CATEGORY_DELETED'],
        },
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.getCategoryEvents(body);
};

export default { metadata, tool, handler };
