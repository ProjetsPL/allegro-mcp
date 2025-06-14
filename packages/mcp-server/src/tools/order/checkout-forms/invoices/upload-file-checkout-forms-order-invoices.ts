// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.checkout_forms.invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/order/checkout-forms/{id}/invoices/{invoiceId}/file',
  operationId: 'uploadOrderInvoiceFile',
};

export const tool: Tool = {
  name: 'upload_file_checkout_forms_order_invoices',
  description:
    'Use to upload invoice file to match created invoice metadata. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-dodac-fakture-do-zamowienia" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#add-an-invoice-to-the-order" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      invoiceId: {
        type: 'string',
      },
      body: {
        type: 'string',
        description: 'File in a binary format',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { invoiceId, ...body } = args as any;
  await client.order.checkoutForms.invoices.uploadFile(invoiceId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
