// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/alle-discount/{campaignId}/submitted-offers',
  operationId: 'getOffersSubmittedToAlleDiscount',
};

export const tool: Tool = {
  name: 'list_submitted_offers_sale_alle_discount',
  description:
    'Endpoint returning info about offer participations for a given AlleDiscount campaign. With this endpoint you are able to validate if the offer participates in AlleDiscount and if it has lowered price on the platform. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-ofert-zgloszonych-do-wybranej-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-offers-submitted-for-the-selected-campaign" target="_blank">EN</a>.',
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
      offerId: {
        type: 'string',
        description:
          'ID of an offer; if the offer with the given ID exists, returns at most one element in the submittedOffers list.',
      },
      offset: {
        type: 'integer',
        description: 'The number of offers to skip while listing the results.',
      },
      participationId: {
        type: 'string',
        description: 'Id of the participation, returns at most one element in the submittedOffers list.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { campaignId, ...body } = args as any;
  return client.sale.alleDiscount.listSubmittedOffers(campaignId, body);
};

export default { metadata, tool, handler };
