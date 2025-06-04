// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.warranties',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/after-sales-service-conditions/warranties/{warrantyId}',
  operationId: 'updateAfterSalesServiceWarrantyUsingPUT',
};

export const tool: Tool = {
  name: 'update_after_sales_service_conditions_warranties',
  description:
    'Use this resource to modify the warranty details. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-informacje-o-gwarancjach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-warranty-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      warrantyId: {
        type: 'string',
      },
      attachment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'The Id of the attachment received in a response from *POST /afters-sales-service-conditions/attachments*',
          },
          name: {
            type: 'string',
            description: 'Attachment file name',
          },
        },
        required: [],
      },
      corporate: {
        $ref: '#/$defs/warranty_period',
      },
      description: {
        type: 'string',
        description: 'Warranty description.',
      },
      individual: {
        $ref: '#/$defs/warranty_period',
      },
      name: {
        type: 'string',
        description: 'Warranty name.',
      },
      type: {
        $ref: '#/$defs/warranty_type',
      },
    },
    $defs: {
      warranty_period: {
        type: 'object',
        properties: {
          lifetime: {
            type: 'boolean',
            description: 'Indices if it is lifetime warranty.',
          },
          period: {
            type: 'string',
            description: 'Period in ISO 8601 format.',
          },
        },
        required: [],
      },
      warranty_type: {
        type: 'string',
        description: 'Defines who is warrantor.',
        enum: ['MANUFACTURER', 'SELLER'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { warrantyId, ...body } = args as any;
  return client.afterSalesServiceConditions.warranties.update(warrantyId, body);
};

export default { metadata, tool, handler };
