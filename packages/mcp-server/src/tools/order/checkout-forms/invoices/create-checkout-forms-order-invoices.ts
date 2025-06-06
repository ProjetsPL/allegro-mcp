// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.checkout_forms.invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/order/checkout-forms/{id}/invoices',
  operationId: 'addOrderInvoicesMetadata',
};

export const tool: Tool = {
  name: 'create_checkout_forms_order_invoices',
  description:
    'Use to add new invoice metadata. Before you send an invoice file, you need to initialize the invoice instance with the required parameters. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-dodac-fakture-do-zamowienia" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#add-an-invoice-to-the-order" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      file: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
        },
        required: ['name'],
      },
      invoiceNumber: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.checkoutForms.invoices.create(id, body));
};

export default { metadata, tool, handler };
