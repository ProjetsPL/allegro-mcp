// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/alle-discount/campaigns',
  operationId: 'getAlleDiscountCampaigns',
};

export const tool: Tool = {
  name: 'list_campaigns_sale_alle_discount',
  description:
    'List current AlleDiscount campaigns. Each campaign has its own list of goods (products) that indicate which offers can be submitted to it. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-dostepnych-kampanii-alleobnizka" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-available-allediscount-campaigns" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
        description: 'Id of the searched campaign. If present, returns at most one entry.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.alleDiscount.listCampaigns(body);
};

export default { metadata, tool, handler };
