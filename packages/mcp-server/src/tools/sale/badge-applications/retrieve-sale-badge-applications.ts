// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.badge_applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/badge-applications/{applicationId}',
  operationId: 'badgeApplications_get_one',
};

export const tool: Tool = {
  name: 'retrieve_sale_badge_applications',
  description:
    'Use this resource to get a badge application details. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#pobierz-dane-zgloszenie" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#retrieve-campaign-application" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      applicationId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { applicationId, ...body } = args as any;
  return asTextContentResult(await client.sale.badgeApplications.retrieve(applicationId));
};

export default { metadata, tool, handler };
