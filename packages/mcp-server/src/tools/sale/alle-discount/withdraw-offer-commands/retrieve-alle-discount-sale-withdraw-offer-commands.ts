// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount.withdraw_offer_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/alle-discount/withdraw-offer-commands/{commandId}',
  operationId: 'getWithdrawOfferFromAlleDiscountCommandsStatus',
};

export const tool: Tool = {
  name: 'retrieve_alle_discount_sale_withdraw_offer_commands',
  description:
    'Use this resource to get information about the withdrawal command execution status. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-sprawdzic-status-wycofania-oferty-z-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-check-the-withdrawal-status-of-an-offer-from-a-campaign" target="_blank">EN</a>.',
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
  return asTextContentResult(await client.sale.alleDiscount.withdrawOfferCommands.retrieve(commandId));
};

export default { metadata, tool, handler };
