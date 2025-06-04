// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.price_automation.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sale/price-automation/rules/{ruleId}',
  operationId: 'deleteAutomaticPricingRuleUsingDelete',
};

export const tool: Tool = {
  name: 'delete_price_automation_sale_rules',
  description:
    'Use this resource to delete automatic pricing rule. This resource is rate limited to 5 requests per second. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-usunac-regule-cenowa" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-delete-a-pricing-rule" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      ruleId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { ruleId, ...body } = args as any;
  return client.sale.priceAutomation.rules.delete(ruleId);
};

export default { metadata, tool, handler };
