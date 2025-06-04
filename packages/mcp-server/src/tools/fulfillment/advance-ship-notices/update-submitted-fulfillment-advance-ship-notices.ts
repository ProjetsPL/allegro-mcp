// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.advance_ship_notices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/fulfillment/advance-ship-notices/{id}/submitted',
  operationId: 'updateSubmittedAdvanceShipNotice',
};

export const tool: Tool = {
  name: 'update_submitted_fulfillment_advance_ship_notices',
  description:
    'Use this resource to update already submitted Advance Ship Notice. Update is allowed only when Advance Ship Notice is in "IN_TRANSIT" status. Modifications are limited to:\n  - changing items quantity\n  - removing items\n  - changing handling unit amount\n  - changing shipping courier id, name, tracking numbers or vehicle licence plate or third party delivery details (depending on the selected shipping method in the submitted advance ship notice)\nHandling unit\'s amount property update clears labels property. Use Create labels command to create new labels for provided content. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#edytuj-zakonczone-awizo" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#edit-advance-ship-notice" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'if-match': {
        type: 'string',
      },
      handlingUnit: {
        type: 'object',
        description: 'Represents information about handling unit.',
        properties: {
          amount: {
            type: 'number',
            description:
              "Number of handling units. Depending on the selected handling unit type, it's the number of boxes, pallets or packages placed in the container to be dispatched.",
          },
        },
        required: [],
      },
      items: {
        type: 'array',
        description: 'A list of product items.',
        items: {
          $ref: '#/$defs/product_item',
        },
      },
      shipping: {
        type: 'object',
        description: 'Represents information about package shipment.',
        properties: {
          courier: {
            type: 'object',
            description: 'Represents courier details of shipping.',
            properties: {
              id: {
                type: 'string',
                description:
                  'Supported courier ids are ALLEGRO, DB_SCHENKER, DHL, DPD, DPD_SK, INPOST, ORLEN, POCZTA_POLSKA, SUUS, UPS. If requested courier is not supported then use OTHER value and provide courier name in name field.',
              },
              name: {
                type: 'string',
                description: "Courier name to be provided only if id is OTHER, otherwise it's ignored.",
              },
              trackingNumbers: {
                type: 'array',
                description: 'List of tracking numbers.',
                items: {
                  type: 'string',
                },
              },
            },
            required: [],
          },
          estimatedTimeOfArrival: {
            type: 'string',
            description:
              'The estimated date and time of Advance Ship Notice arrival in the warehouse. Provided in [ISO 8601 format](link: https://en.wikipedia.org/wiki/ISO_8601).',
            format: 'date-time',
          },
          thirdParty: {
            type: 'object',
            description: 'Represents shipping details from third party.',
            properties: {
              name: {
                type: 'string',
                description: 'Third party name.',
              },
              orderNumber: {
                type: 'string',
                description: 'Third party order number.',
              },
            },
            required: [],
          },
          truckLicencePlate: {
            type: 'string',
            description: 'Vehicle licence plate number.',
          },
        },
        required: [],
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
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.fulfillment.advanceShipNotices.updateSubmitted(id, body);
};

export default { metadata, tool, handler };
