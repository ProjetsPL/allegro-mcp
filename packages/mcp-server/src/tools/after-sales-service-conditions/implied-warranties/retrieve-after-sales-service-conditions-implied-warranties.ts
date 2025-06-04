// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.implied_warranties',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/after-sales-service-conditions/implied-warranties/{impliedWarrantyId}',
  operationId: 'getAfterSalesServiceImpliedWarrantyUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_after_sales_service_conditions_implied_warranties',
  description:
    'Use this resource to get an implied warranty details. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-reklamacji-przypisane-do-konta" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-implied-warranties-assigned-to-the-account" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      impliedWarrantyId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { impliedWarrantyId, ...body } = args as any;
  return client.afterSalesServiceConditions.impliedWarranties.retrieve(impliedWarrantyId);
};

export default { metadata, tool, handler };
