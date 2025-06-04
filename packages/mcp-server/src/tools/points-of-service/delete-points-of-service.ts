// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'points_of_service',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/points-of-service/{id}',
  operationId: 'deletePOSUsingDELETE',
};

export const tool: Tool = {
  name: 'delete_points_of_service',
  description:
    'Use this resource to delete a point of service. Read more: <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a> / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.pointsOfService.delete(id);
};

export default { metadata, tool, handler };
