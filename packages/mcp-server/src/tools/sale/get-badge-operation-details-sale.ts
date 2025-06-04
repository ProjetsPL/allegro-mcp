// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/badge-operations/{operationId}',
  operationId: 'badgeOperations_get_one',
};

export const tool: Tool = {
  name: 'get_badge_operation_details_sale',
  description:
    'Use this resource to get badge operation details. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#zmiana-ceny-i-zakonczenie-oznaczenia" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#change-price-and-finish-badge" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      operationId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { operationId, ...body } = args as any;
  return client.sale.getBadgeOperationDetails(operationId);
};

export default { metadata, tool, handler };
