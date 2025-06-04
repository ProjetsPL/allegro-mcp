// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'shipment_management.shipments.create_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/shipment-management/shipments/create-commands',
  operationId: 'createNewShipment',
};

export const tool: Tool = {
  name: 'create_shipments_shipment_management_create_commands',
  description:
    'Use this resource to create shipment for delivery. Read more: <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-utworzyc-nowa-paczke" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-create-a-new-shipment" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'object',
        properties: {
          deliveryMethodId: {
            type: 'string',
            description: 'Id of delivery method, chosen by buyer in order.',
          },
          packages: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                height: {
                  $ref: '#/$defs/dimension_value',
                },
                length: {
                  $ref: '#/$defs/dimension_value',
                },
                type: {
                  type: 'string',
                  description: 'Available values: PACKAGE|DOX|PALLET|OTHER',
                },
                weight: {
                  $ref: '#/$defs/weight_value',
                },
                width: {
                  $ref: '#/$defs/dimension_value',
                },
                textOnLabel: {
                  type: 'string',
                  description: 'Additional information on the package label.',
                },
              },
              required: ['height', 'length', 'type', 'weight', 'width'],
            },
          },
          receiver: {
            $ref: '#/$defs/receiver_address',
          },
          sender: {
            $ref: '#/$defs/sender_address',
          },
          additionalProperties: {
            type: 'object',
            description:
              'Key-Value map defining non-standard, carrier specific features. List of the supported properties is located as sub-resource in /shipment-management/delivery-services.',
          },
          additionalServices: {
            type: 'array',
            description: 'List of additional services.',
            items: {
              type: 'string',
              description:
                'Additional service ID. List of available services is located as sub-resource in /shipment-management/delivery-services.',
            },
          },
          cashOnDelivery: {
            $ref: '#/$defs/cash_on_delivery',
          },
          credentialsId: {
            type: 'string',
            description:
              'ID of merchant agreement, registered in WZA. Value should be read from /shipment-management/delivery-services. For Allegro Standard methods, this field should be null.',
          },
          insurance: {
            $ref: '#/$defs/insurance',
          },
          labelFormat: {
            type: 'string',
            description: 'Label file format.',
            enum: ['PDF', 'ZPL'],
          },
          pickup: {
            $ref: '#/$defs/shipment_pickup_address',
          },
          referenceNumber: {
            type: 'string',
            description: 'Shipment identifier in own system. Example: `Ordering number`.',
          },
        },
        required: ['deliveryMethodId', 'packages', 'receiver', 'sender'],
      },
      commandId: {
        type: 'string',
        description: 'Command UUID. If empty, then system generate new one.',
      },
    },
    $defs: {
      dimension_value: {
        type: 'object',
        properties: {
          unit: {
            type: 'string',
            description: 'Dimension unit. Currently only `CENTIMETER` is accepted.',
            enum: ['CENTIMETER'],
          },
          value: {
            type: 'number',
            description: 'Dimension value.',
          },
        },
        required: ['unit', 'value'],
      },
      weight_value: {
        type: 'object',
        properties: {
          unit: {
            type: 'string',
            description: 'Weight unit. Currently only `KILOGRAMS` is accepted.',
            enum: ['KILOGRAMS'],
          },
          value: {
            type: 'number',
            description: 'Weight value, provided in a string format to avoid rounding errors.',
          },
        },
        required: ['unit', 'value'],
      },
      receiver_address: {
        allOf: [
          {
            $ref: '#/$defs/address',
          },
        ],
        description: 'Receiver address data with optional point ID.',
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
      sender_address: {
        allOf: [
          {
            $ref: '#/$defs/address',
          },
        ],
        description:
          'Shipment owner data. This address will be provided on label and will be used to operation return.',
      },
      cash_on_delivery: {
        type: 'object',
        properties: {
          amount: {
            type: 'string',
            description: 'Postpaid value',
          },
          currency: {
            type: 'string',
            description: 'ISO 4217 currency code.',
          },
          iban: {
            type: 'string',
            description: 'Bank account number.',
          },
          ownerName: {
            type: 'string',
            description: 'Bank account owner.',
          },
        },
        required: ['amount', 'currency'],
      },
      insurance: {
        type: 'object',
        properties: {
          amount: {
            type: 'string',
            description: 'Additional parcel protection value',
          },
          currency: {
            type: 'string',
            description: 'ISO 4217 currency code.',
          },
        },
        required: ['amount', 'currency'],
      },
      shipment_pickup_address: {
        allOf: [
          {
            $ref: '#/$defs/address',
          },
        ],
        description:
          'Optional pickup address with optional drop-off point. If empty, then sender object will be used. Parameter is deprecated and will be removed in the future. Pickup address should be provided when requesting Pickup.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.shipmentManagement.shipments.createCommands.create(body);
};

export default { metadata, tool, handler };
