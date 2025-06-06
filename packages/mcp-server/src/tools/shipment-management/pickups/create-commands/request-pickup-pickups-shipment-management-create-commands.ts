// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management.pickups.create_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/shipment-management/pickups/create-commands',
  operationId: 'createPickup',
};

export const tool: Tool = {
  name: 'request_pickup_pickups_shipment_management_create_commands',
  description:
    'Use this resource to request a pickup of shipments. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-zamowic-odbior-paczek-przez-kuriera" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-request-shipment-pickup-by-a-courier" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'object',
        properties: {
          pickupDateProposalId: {
            type: 'string',
            description: 'Internal pickup proposal ID',
          },
          shipmentIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          address: {
            $ref: '#/$defs/pickup_address',
          },
        },
        required: ['pickupDateProposalId', 'shipmentIds'],
      },
      commandId: {
        type: 'string',
        description: 'Command UUID. If empty, then system generate new one.',
      },
    },
    $defs: {
      pickup_address: {
        allOf: [
          {
            $ref: '#/$defs/address',
          },
        ],
        description:
          'Optional pickup address with optional drop-off point. If empty, then pickup address from Shipment object will be used.',
      },
      address: {
        type: 'object',
        description: 'Address object',
        properties: {
          city: {
            type: 'string',
          },
          countryCode: {
            type: 'string',
            description: 'Country code in ISO 3166-1 alfa-2 format (two-letter code).',
          },
          email: {
            type: 'string',
            description:
              'Email address. For receiver, must be a valid buyer email generated by Allegro (eg. hamu7udk3p+17454c1b6@allegromail.pl).',
          },
          phone: {
            type: 'string',
            description: 'Cell phone',
          },
          postalCode: {
            type: 'string',
          },
          street: {
            type: 'string',
          },
          company: {
            type: 'string',
            description: 'Company name. Name or Company are required.',
          },
          name: {
            type: 'string',
            description: 'Person name. Name or Company are required.',
          },
          point: {
            type: 'string',
            description: 'Pickup point id. You can get it from order or directly from courier service.',
          },
          state: {
            type: 'string',
            description:
              'Required for shipments to Ireland( county name ), United States ( state abbreviation / ISO code ), Canada ( province postal code / ISO code )',
          },
        },
        required: ['city', 'countryCode', 'email', 'phone', 'postalCode', 'street'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.shipmentManagement.pickups.createCommands.requestPickup(body);
};

export default { metadata, tool, handler };
