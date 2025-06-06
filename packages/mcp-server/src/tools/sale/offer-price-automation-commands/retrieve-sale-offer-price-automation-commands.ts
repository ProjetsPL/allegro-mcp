// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_price_automation_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-price-automation-commands/{commandId}',
  operationId: 'getofferAutomaticPricingModificationCommandStatusUsingGET',
};

export const tool: Tool = {
  name: 'retrieve_sale_offer_price_automation_commands',
  description:
    'Returns status and summary of the offer-price-automation-command. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#reguly-cenowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#pricing-rules" target="_blank">EN</a>. This resource is rate limited to retrieving information about 270 000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return asTextContentResult(await client.sale.offerPriceAutomationCommands.retrieve(commandId));
};

export default { metadata, tool, handler };
