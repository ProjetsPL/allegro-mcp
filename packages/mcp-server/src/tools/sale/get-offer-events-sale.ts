// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/offer-events',
  operationId: 'getOfferEvents',
};

export const tool: Tool = {
  name: 'get_offer_events_sale',
  description:
    'Use this endpoint to get events from the last 24 hours concerning changes in the authorized seller\'s offers.\nAt present we support the following events:\n  - OFFER_ACTIVATED - offer is visible on site and available for purchase, occurs when offer status changes from ACTIVATING to ACTIVE.\n  - OFFER_CHANGED - occurs when offer\'s fields has been changed e.g. description or photos.\n  - OFFER_ENDED - offer is no longer available for purchase, occurs when offer status changes from ACTIVE to ENDED.\n  - OFFER_STOCK_CHANGED - stock in an offer was changed either via purchase or by seller.\n  - OFFER_PRICE_CHANGED - occurs when price in an offer was changed.\n  - OFFER_ARCHIVED - offer is no longer available on listing and has been archived.\n  - OFFER_BID_PLACED - bid was placed on the offer.\n  - OFFER_BID_CANCELED - bid for offer was canceled.\n  - OFFER_TRANSLATION_UPDATED - translation of offer was updated.\n  - OFFER_VISIBILITY_CHANGED - visibility of offer was changed on marketplaces.\n\nReturned events may occur by actions made via browser or API. The resource allows you to get events concerning active offers and offers scheduled for activation (status ACTIVE and ACTIVATING). Returned events do not concern offers in INACTIVE and ENDED status (the exception is OFFER_ARCHIVED event). External id is returned for all event types except OFFER_BID_PLACED and OFFER_BID_CANCELED. Please note that one change may result in more than one event. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#dziennik-zdarzen-w-ofertach-sprzedawcy" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#event-journal-concerning-changes-in-seller-s-offers" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description:
          'The ID of the last seen event. Events that occured after the given event will be returned.',
      },
      limit: {
        type: 'integer',
        description: 'The number of events that will be returned in the response.',
      },
      type: {
        type: 'array',
        description:
          'The types of events that will be returned in the response. All types of events are returned by default.',
        items: {
          type: 'string',
          enum: [
            'OFFER_ACTIVATED',
            'OFFER_CHANGED',
            'OFFER_ENDED',
            'OFFER_STOCK_CHANGED',
            'OFFER_PRICE_CHANGED',
            'OFFER_ARCHIVED',
            'OFFER_BID_PLACED',
            'OFFER_BID_CANCELED',
            'OFFER_TRANSLATION_UPDATED',
            'OFFER_VISIBILITY_CHANGED',
          ],
        },
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.getOfferEvents(body);
};

export default { metadata, tool, handler };
