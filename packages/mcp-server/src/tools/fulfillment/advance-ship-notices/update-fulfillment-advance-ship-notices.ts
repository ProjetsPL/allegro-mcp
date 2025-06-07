// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.advance_ship_notices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/fulfillment/advance-ship-notices/{id}',
  operationId: 'updateAdvanceShipNotice',
};

export const tool: Tool = {
  name: 'update_fulfillment_advance_ship_notices',
  description:
    'Use this resource to update an Advance Ship Notice. Any content property update will clear labels property. Use Create labels command to create new labels for provided content.\nIf a client wants to update read-only property, an error is returned (only in cases when sent value will be different than actual on the server). Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#uzupelnij-dane-o-awizo" target="_blank">PL</a> / <a href="../../one-fulfillment-by-allegro-4R9dXyMPlc9#complete-the-data-of-advance-ship-notice" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      items: {
        type: 'array',
        description: 'A list of product items.',
        items: {
          $ref: '#/$defs/product_item',
        },
      },
      'if-match': {
        type: 'string',
      },
      handlingUnit: {
        $ref: '#/$defs/handling_unit',
      },
      shipping: {
        $ref: '#/$defs/shipping',
      },
    },
    $defs: {
      product_item: {
        type: 'object',
        description: 'Groups together product and quantity.',
        properties: {
          product: {
            $ref: '#/$defs/product',
          },
          quantity: {
            type: 'number',
            description: 'The quantity of the product.',
          },
        },
        required: ['product', 'quantity'],
      },
      product: {
        type: 'object',
        description: 'The product data.',
        properties: {
          id: {
            type: 'string',
            description: 'The product identifier.',
          },
        },
        required: ['id'],
      },
      handling_unit: {
        type: 'object',
        description: 'Represents information about handling unit.',
        properties: {
          amount: {
            type: 'number',
            description:
              'Amount of unit type. Not required when ASN status is DRAFT. When unit type is BOX or PALLET then it means how many handling units will be sent. When unit type is CONTAINER then it means how many handling units inside a container will be sent.',
          },
          labelsType: {
            type: 'string',
            description:
              'Not required when ASN status is DRAFT. Available values - ONE_FULFILMENT, NONE. When unit type is CONTAINER labelsType can not be set to ONE_FULFILMENT.',
          },
          unitType: {
            type: 'string',
            description: 'The unit type of Advance Ship Notice. Available values - BOX, PALLET, CONTAINER.',
          },
        },
        required: [],
      },
      shipping: {
        type: 'object',
        description:
          'Represents information about package shipment.\nConstraints:\n  * for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and countryCode are required.\n  * for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode are required.\n  * for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and countryCode are required.',
        properties: {
          method: {
            type: 'string',
            description:
              'The delivery method of the Advance Ship Notice. Not required when Advance Ship Notice in DRAFT status',
          },
        },
        required: ['method'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.fulfillment.advanceShipNotices.update(id, body));
};

export default { metadata, tool, handler };
