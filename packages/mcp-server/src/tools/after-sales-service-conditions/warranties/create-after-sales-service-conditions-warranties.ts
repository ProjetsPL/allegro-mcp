// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.warranties',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/after-sales-service-conditions/warranties',
  operationId: 'createAfterSalesServiceWarrantyUsingPOST',
};

export const tool: Tool = {
  name: 'create_after_sales_service_conditions_warranties',
  description:
    'Use this resource to create a warranty definition. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-informacje-o-gwarancjach" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-warranty-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return client.afterSalesServiceConditions.warranties.create(body);
};

export default { metadata, tool, handler };
