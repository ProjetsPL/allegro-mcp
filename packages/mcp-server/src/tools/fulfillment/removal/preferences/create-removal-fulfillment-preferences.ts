// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.removal.preferences',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/fulfillment/removal/preferences',
  operationId: 'createFulfillmentRemovalPreferences',
};

export const tool: Tool = {
  name: 'create_removal_fulfillment_preferences',
  description:
    'Use this resource to create new active removal preference. From the moment the preference is set, it becomes the active one, and all new system removal orders will be associated with this preference. Removal preference is associated with system removal order at the moment of removal order is created. It means there can be not yet fulfilled removal orders associated with previously set removal preference.',
  inputSchema: {
    type: 'object',
    properties: {
      operation: {
        type: 'string',
        description:
          'Preference what kind of operation to execute on undesirable items WITHDRAWAL/DISPOSAL (required).',
        enum: ['WITHDRAWAL', 'DISPOSAL'],
      },
      address: {
        type: 'object',
        description: 'Represents information about address passed for withdrawal purpose.',
        properties: {
          city: {
            type: 'string',
            description: 'The name of the city or town (required).',
          },
          company: {
            type: 'string',
            description: 'Delivery recipient name (required).',
          },
          countryCode: {
            type: 'string',
            description: 'The country code where the address is located (required).',
          },
          phone: {
            type: 'object',
            description: 'Represents international phone number with country code.',
            properties: {
              countryCode: {
                type: 'string',
                description: 'Country code without neither + nor 0 prefix.',
              },
              number: {
                type: 'string',
                description: 'Local phone number without prefix.',
              },
            },
            required: ['countryCode', 'number'],
          },
          postalCode: {
            type: 'string',
            description: 'The code used for postal delivery purposes (required).',
          },
          street: {
            type: 'string',
            description:
              'The name of the street, building number and so on, where the building is located (required).',
          },
          additionalInfo: {
            type: 'string',
            description:
              'Additional info which can be passed on courier label but only for parcels with larger dimensions sent not by WzA (SwA).',
          },
        },
        required: ['city', 'company', 'countryCode', 'phone', 'postalCode', 'street'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.fulfillment.removal.preferences.create(body));
};

export default { metadata, tool, handler };
