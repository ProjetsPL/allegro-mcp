// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.implied_warranties',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/after-sales-service-conditions/implied-warranties/{impliedWarrantyId}',
  operationId: 'updateAfterSalesServiceImpliedWarrantyUsingPUT',
};

export const tool: Tool = {
  name: 'update_after_sales_service_conditions_implied_warranties',
  description:
    'Use this resource to modify the implied warranty details. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-informacje-o-warunkach-reklamacji" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-implied-warranty-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      impliedWarrantyId: {
        type: 'string',
      },
      address: {
        $ref: '#/$defs/after_sales_service_address',
      },
      corporate: {
        $ref: '#/$defs/implied_warranty_period',
      },
      description: {
        type: 'string',
        description: 'Implied warranty description.',
      },
      individual: {
        $ref: '#/$defs/implied_warranty_period',
      },
      name: {
        type: 'string',
        description: 'Warranty name.',
      },
    },
    $defs: {
      after_sales_service_address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            description: 'City name.',
          },
          countryCode: {
            type: 'string',
            description: 'Country code.',
          },
          name: {
            type: 'string',
            description: 'Company or person name.',
          },
          postCode: {
            type: 'string',
            description: 'Post code.',
          },
          street: {
            type: 'string',
            description: 'Street name.',
          },
        },
        required: ['city', 'countryCode', 'name', 'postCode', 'street'],
      },
      implied_warranty_period: {
        type: 'object',
        properties: {
          period: {
            type: 'string',
            description: 'Period in ISO 8601 format. Only periods in full years are accepted.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { impliedWarrantyId, ...body } = args as any;
  return asTextContentResult(
    await client.afterSalesServiceConditions.impliedWarranties.update(impliedWarrantyId, body),
  );
};

export default { metadata, tool, handler };
