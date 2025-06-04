// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.alle_discount.submit_offer_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/alle-discount/submit-offer-commands/{commandId}',
  operationId: 'getSubmitOfferToAlleDiscountCommandsStatus',
};

export const tool: Tool = {
  name: 'retrieve_alle_discount_sale_submit_offer_commands',
  description:
    'Use this resource to get information about the submit offer command execution status. Read more: <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#jak-sprawdzic-status-zgloszenia-oferty-do-kampanii" target="_blank">PL</a> / <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#how-to-check-the-status-of-an-offer-submission-to-a-campaign" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return client.sale.alleDiscount.submitOfferCommands.retrieve(commandId);
};

export default { metadata, tool, handler };
