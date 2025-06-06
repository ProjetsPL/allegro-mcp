// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'points_of_service',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/points-of-service/{id}',
  operationId: 'modifyPOSUsingPUT',
};

export const tool: Tool = {
  name: 'update_points_of_service',
  description:
    'Use this resource to modify a point of service. Read more: <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a> / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'UUID. When creating a point of service (Post) the field is ignored. It is required when updating (Put) a point of service.',
      },
      address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
          },
          countryCode: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          zipCode: {
            type: 'string',
          },
          coordinates: {
            $ref: '#/$defs/coordinates',
          },
          street: {
            type: 'string',
          },
        },
        required: ['city', 'countryCode', 'state', 'zipCode'],
      },
      confirmationType: {
        type: 'string',
        description:
          'Confirmation method: AWAIT_CONTACT - We will inform you about the time of receipt, CALL_US - Please make an appointment, CONTACT_NOT_REQUIRED - Contact is not required.',
      },
      name: {
        type: 'string',
      },
      openHours: {
        type: 'array',
        description: 'Possible empty list of opening hours.',
        items: {
          type: 'object',
          properties: {
            dayOfWeek: {
              type: 'string',
              description:
                'Days of the week: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. Date format ISO 8601',
            },
            from: {
              type: 'string',
              description: 'Date format (ISO 8601) - HH:mm:ss.SSS',
            },
            to: {
              type: 'string',
              description: 'Date format (ISO 8601) - HH:mm:ss.SSS',
            },
          },
          required: ['dayOfWeek', 'from', 'to'],
        },
      },
      status: {
        type: 'string',
        description:
          'Point of service status: ACTIVE - active, TEMPORARILY_CLOSED - temporarily closed, CLOSED_DOWN - closed down, DELETED - deleted.',
      },
      type: {
        type: 'string',
        description: 'Indicates point type. The only valid value so far is PICKUP_POINT.',
      },
      createdAt: {
        type: 'string',
        description:
          "Creation date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When creating (Post) or updating (Put) a point of service the field is ignored.",
      },
      email: {
        type: 'string',
      },
      externalId: {
        type: 'string',
        description: 'ID from external client system.',
      },
      locations: {
        type: 'array',
        description:
          'IDs for a location. When creating (Post) or updating (Put) a point of service the field is ignored.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
          },
          required: ['id'],
        },
      },
      payments: {
        type: 'array',
        description: 'An empty list of payment types is available.',
        items: {
          type: 'object',
          properties: {
            method: {
              type: 'string',
              description: 'Available forms of payment: CASH - cash, CARD - card.',
            },
          },
          required: ['method'],
        },
      },
      phoneNumber: {
        type: 'string',
      },
      seller: {
        $ref: '#/$defs/seller',
      },
      serviceTime: {
        type: 'string',
        description: "Delivery time / Time period for receipt. Date format ISO 8601 e.g. 'PT24H'",
      },
      updatedAt: {
        type: 'string',
        description:
          "Modification date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When creating (Post) or updating (Put) a point of service the field is ignored.",
      },
    },
    $defs: {
      coordinates: {
        type: 'object',
        properties: {
          lat: {
            type: 'number',
          },
          lon: {
            type: 'number',
          },
        },
        required: ['lat', 'lon'],
      },
      seller: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.pointsOfService.update(id, body));
};

export default { metadata, tool, handler };
