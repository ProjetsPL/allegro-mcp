// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.product_offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/product-offers/{offerId}/operations/{operationId}',
  operationId: 'getProductOfferProcessingStatus',
};

export const tool: Tool = {
  name: 'check_operation_status_sale_product_offers',
  description:
    'The URI for the resource given by Location header of POST /sale/product-offers and PATCH /sale/product-offers/{offerId}. Use this resource to check processing status of a POST or PATCH request. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#publikacja-oferty-w-asynchronicznym-api" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-publication-in-asynchronous-api" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      operationId: {
        type: 'string',
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { operationId, ...body } = args as any;
  return client.sale.productOffers.checkOperationStatus(operationId, body);
};

export default { metadata, tool, handler };
