// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/alle-discount/{campaignId}/eligible-offers',
  operationId: 'getOffersEligibleForAlleDiscount',
};

export const tool: Tool = {
  name: 'list_eligible_offers_sale_alle_discount',
  description:
    'Endpoint returning info about offers that can be submitted to a given AlleDiscount campaign. Only offer linked to the product in published list of goods (products) can be submitted to a given AlleDiscount campaign. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-ofert-kwalifikujacych-sie-do-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-offers-eligible-for-the-selected-campaign" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of offers returned in the eligibleOffers list; max value is 200.',
      },
      meetsConditions: {
        type: 'boolean',
        description: 'If true, filters offers that only meet conditions of the campaign.',
      },
      offerId: {
        type: 'string',
        description:
          'ID of an offer; if the offer with the given ID exists, returns at most one element in the eligibleOffers list.',
      },
      offset: {
        type: 'integer',
        description: 'The number of offers to skip while listing the results.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { campaignId, ...body } = args as any;
  return asTextContentResult(await client.sale.alleDiscount.listEligibleOffers(campaignId, body));
};

export default { metadata, tool, handler };
