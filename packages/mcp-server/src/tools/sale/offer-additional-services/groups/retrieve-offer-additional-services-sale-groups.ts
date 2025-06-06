// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-additional-services/groups/{groupId}',
  operationId: 'getAdditionalServicesGroupUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_offer_additional_services_sale_groups',
  description:
    'Use this resource to get additional services group for a given ID. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-wybrana-grupe-uslug-dodatkowych" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-a-group-of-additional-services-for-a-given-id" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      groupId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { groupId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerAdditionalServices.groups.retrieve(groupId));
};

export default { metadata, tool, handler };
