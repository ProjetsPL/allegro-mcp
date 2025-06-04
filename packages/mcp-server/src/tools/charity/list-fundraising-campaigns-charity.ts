// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'charity',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/charity/fundraising-campaigns',
  operationId: 'searchFundraisingCampaigns',
};

export const tool: Tool = {
  name: 'list_fundraising_campaigns_charity',
  description:
    'Use this resource to search fundraising campaigns. Read more: <a href="../../news/wystaw-oferte-charytatywna-na-allegro-MR87PBxZySY" target="_blank">PL</a> / <a href="../../news/list-a-charity-offer-on-allegro-LRV0572GOhr" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Maximum number of returned results.',
      },
      phrase: {
        type: 'string',
        description: "Fundraising campaign name or it's Organization name prefix to search for.",
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.charity.listFundraisingCampaigns(body);
};

export default { metadata, tool, handler };
