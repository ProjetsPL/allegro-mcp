// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offers.promo_options_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offers/promo-options-commands/{commandId}/tasks',
  operationId: 'getPromoModificationCommandDetailedResultUsingGET',
};

export const tool: Tool = {
  name: 'detailed_result_offers_sale_promo_options_commands',
  description:
    'Use this resource to retrieve the result of an offer modification command. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-szczegolowy-raport-zadania" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-a-detailed-report-of-your-task" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The limit of returned items.',
      },
      offset: {
        type: 'integer',
        description: 'The offset of returned items.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return client.sale.offers.promoOptionsCommands.detailedResult(commandId, body);
};

export default { metadata, tool, handler };
