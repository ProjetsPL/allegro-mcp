// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.price_automation.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/price-automation/rules',
  operationId: 'getAutomaticPricingRulesUsingGET',
};

export const tool: Tool = {
  name: 'list_price_automation_sale_rules',
  description:
    'Use this resource to get automatic pricing rules. Rules with property **default** set to **true** are default rules created by Allegro for each merchant. This resource is rate limited to 5 requests per second. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-dostepne-reguly-cenowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-pricing-rules" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.sale.priceAutomation.rules.list());
};

export default { metadata, tool, handler };
