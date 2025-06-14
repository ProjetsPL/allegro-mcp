// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.checkout_forms',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/order/checkout-forms/{id}/fulfillment',
  operationId: 'setOrderFulfillmentUsingPUT',
};

export const tool: Tool = {
  name: 'update_fulfillment_order_checkout_forms',
  description:
    'Use to set seller order status. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#zmiana-statusu-realizacji-zamowienia" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#order-fulfillment-status-change" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      checkoutForm: {
        type: 'object',
        properties: {
          revision: {
            type: 'string',
            description: 'Checkout form revision.',
          },
        },
        required: [],
      },
      shipmentSummary: {
        type: 'object',
        properties: {
          lineItemsSent: {
            type: 'string',
            description: 'Indicates how many line items have tracking number specified.',
            enum: ['NONE', 'SOME', 'ALL'],
          },
        },
        required: [],
      },
      status: {
        type: 'string',
        description:
          "Order seller status. The status is managed by the seller, however in some cases the seller can enable automatic change of the status in the Orders [settings](https://salescenter.allegro.com/orders/settings). Order changes to `SENT` status when a tracking number is added to the order and the seller has enabled corresponding setting (see: [here](https://help.allegro.com/sell/en/a/sales-management-via-advanced-settings-of-the-list-of-offers-and-orders-6M9E0wr5Rt5#automatic-status-change-after-adding-a-tracking-number)). Order can be switched to `RETURNED` status when both the buyer returns all order's items and the seller makes a refund for all of the order's items (either automatically or manually, see: [here](https://help.allegro.com/sell/en/a/how-can-i-issue-a-refund-to-the-buyer-k1wRo9wBXUx)). The `RETURNED` status cannot be set by the seller - it changes automatically when corresponding setting is enabled in sale settings (see: [here](https://help.allegro.com/sell/en/a/how-to-use-the-orders-tab-6M9E0wO9BFw#filtering-and-searching-for-orders)).",
        enum: [
          'NEW',
          'PROCESSING',
          'READY_FOR_SHIPMENT',
          'READY_FOR_PICKUP',
          'SENT',
          'PICKED_UP',
          'CANCELLED',
          'SUSPENDED',
          'RETURNED',
        ],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.order.checkoutForms.updateFulfillment(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
