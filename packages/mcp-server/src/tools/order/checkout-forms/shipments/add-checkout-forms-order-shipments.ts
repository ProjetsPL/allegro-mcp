// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.checkout_forms.shipments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/order/checkout-forms/{id}/shipments',
  operationId: 'createOrderShipmentsUsingPOST',
};

export const tool: Tool = {
  name: 'add_checkout_forms_order_shipments',
  description:
    'Add a parcel tracking number (shipment) to given order line items. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-dodac-numer-przesylki-do-przedmiotu-w-zamowieniu" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#add-tracking-number-to-order" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      carrierId: {
        type: 'string',
        description:
          'Supported carriers are available via <a href="#operation/getOrdersCarriersUsingGET" target="_blank">shipping carriers resource</a>.',
      },
      waybill: {
        type: 'string',
        description:
          'Waybill number (parcel tracking number). Cannot be empty and must be no longer than 64 characters.',
      },
      carrierName: {
        type: 'string',
        description:
          'Carrier name to be provided only if carrierId is OTHER, otherwise it’s ignored. Must be no longer than 30 characters.',
      },
      lineItems: {
        type: 'array',
        description:
          'List of order line items. They must be from the order specified in the path parameter. When list is not provided or it is empty it means that every item from an order is included in shipment.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Identifier of an order line item.',
            },
          },
          required: ['id'],
        },
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.checkoutForms.shipments.add(id, body));
};

export default { metadata, tool, handler };
