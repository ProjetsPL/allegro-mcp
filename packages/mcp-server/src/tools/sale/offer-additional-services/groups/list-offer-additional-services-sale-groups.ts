// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_additional_services.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-additional-services/groups',
  operationId: 'getListOfAdditionalServicesGroupsUsingGET',
};

export const tool: Tool = {
  name: 'list_offer_additional_services_sale_groups',
  description:
    'Use this resource to retrieve a list of groups with additional services available to a given user which you may assign to offers. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-liste-grup-uslug-dodatkowych-na-koncie" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-a-list-of-additional-services-groups-for-the-account" target="_blank">EN</a>.',
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
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.offerAdditionalServices.groups.list(body);
};

export default { metadata, tool, handler };
