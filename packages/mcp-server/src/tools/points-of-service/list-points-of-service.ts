// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'points_of_service',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/points-of-service',
  operationId: 'getPOSListUsingGET',
};

export const tool: Tool = {
  name: 'list_points_of_service',
  description:
    'Use this resource to get a list of points of service by seller ID. Read more: <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a> / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      countryCode: {
        type: 'string',
        description:
          'Country code identifier in ISO format. In case of incorrect or unsupported country code, empty list is returned. If missing, list of all defined points is returned. If present, correct and supported, list of all points with given country code for the user is returned.',
      },
      seller: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'User identifier.',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.pointsOfService.list(body);
};

export default { metadata, tool, handler };
