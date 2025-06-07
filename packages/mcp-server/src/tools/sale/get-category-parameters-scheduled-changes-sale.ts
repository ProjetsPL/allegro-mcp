// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/category-parameters-scheduled-changes',
  operationId: 'getCategoryParametersScheduledChangesUsingGET_1',
};

export const tool: Tool = {
  name: 'get_category_parameters_scheduled_changes_sale',
  description:
    'Use this resource to get information about planned changes in category parameters. Please note that in some cases, the returned events may finally not happen in the future.\nAt present we support the following changes: - REQUIREMENT_CHANGE - the parameter will be required in the category. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-przyszle-zmiany-w-parametrach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-future-changes-in-parameters" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The limit of elements in the response.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of elements in the response.',
      },
      scheduledAt: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description: 'The minimum date and time at which the change was scheduled in ISO 8601 format.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description: 'The maximum date and time at which the change was scheduled in ISO 8601 format.',
            format: 'date-time',
          },
        },
        required: [],
      },
      scheduledFor: {
        type: 'object',
        properties: {
          gte: {
            type: 'string',
            description:
              'The minimum date and time from which the change will be effective from in ISO 8601 format. Should be greater than the current date time and less than 3 months from the current date.',
            format: 'date-time',
          },
          lte: {
            type: 'string',
            description:
              'The maximum date and time from which the change will be effective from in ISO 8601 format. Should be greater than the current date time and less than 3 months from the current date.',
            format: 'date-time',
          },
        },
        required: [],
      },
      type: {
        type: 'array',
        description:
          'The types of changes that will be returned in the response. All types of changes are returned by default.',
        items: {
          type: 'string',
          enum: ['REQUIREMENT_CHANGE'],
        },
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.getCategoryParametersScheduledChanges(body));
};

export default { metadata, tool, handler };
