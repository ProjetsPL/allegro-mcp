// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/events',
  operationId: 'getOrderEventsUsingGET',
};

export const tool: Tool = {
  name: 'list_events_order',
  description:
    'Use this resource to return events that allow you to monitor actions which clients perform, i.e. making a purchase, filling in the checkout form (FOD), finishing payment process, making a surcharge. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#dziennik-zdarzen" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#event-log" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description: 'You can use the event ID to retrieve subsequent chunks of events.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of events returned in the response.',
      },
      type: {
        type: 'array',
        description:
          'Specify array of event types for filtering. Allowed values are:\n  * `BOUGHT`: purchase without checkout form filled in\n  * `FILLED_IN`: checkout form filled in but payment is not completed yet so data could still change\n  * `READY_FOR_PROCESSING`: payment completed. Purchase is ready for processing\n  * `BUYER_CANCELLED`: purchase was cancelled by buyer\n  * `FULFILLMENT_STATUS_CHANGED`: fulfillment status changed\n  * `AUTO_CANCELLED`: purchase was cancelled automatically by Allegro.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.order.listEvents(body);
};

export default { metadata, tool, handler };
