// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.responsible_persons',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/responsible-persons',
  operationId: 'responsiblePersonsPOST',
};

export const tool: Tool = {
  name: 'create_sale_responsible_persons',
  description:
    'Use this resource to create a new responsible person for the compliance of the product with EU regulations. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#osoba-odpowiedzialna-za-zgodnosc-produktu-z-przepisami-unijnymi" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-persons-for-the-compliance-of-the-product-with-eu-regulations" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      Accept: {
        type: 'string',
      },
      name: {
        type: 'string',
        description:
          "Internal name of responsible person in dictionary (visible only to you). Can't start or end with whitespace. Can't contain whitespaces other than space. Can't contain multiple spaces in a row.",
      },
      personalData: {
        type: 'object',
        description: 'Responsible person personal data.',
        properties: {
          address: {
            $ref: '#/$defs/responsible_person_address',
          },
          contact: {
            $ref: '#/$defs/responsible_person_contact',
          },
          name: {
            type: 'string',
            description:
              "Name of responsible person. Can't start or end with whitespace. Can't contain whitespaces other than space. Can't contain multiple spaces in a row.",
          },
        },
        required: [],
      },
    },
    $defs: {
      responsible_person_address: {
        type: 'object',
        description: 'Responsible person address.',
        properties: {
          city: {
            type: 'string',
            description: 'City.',
          },
          countryCode: {
            type: 'string',
            description: 'Code of responsible person country (ISO 3166).',
            enum: [
              'AT',
              'BE',
              'BG',
              'HR',
              'CY',
              'CZ',
              'DK',
              'EE',
              'FI',
              'FR',
              'GR',
              'ES',
              'IE',
              'LT',
              'LU',
              'LV',
              'MT',
              'NL',
              'DE',
              'PL',
              'PT',
              'RO',
              'SK',
              'SI',
              'SE',
              'HU',
              'IT',
            ],
          },
          postalCode: {
            type: 'string',
            description: 'Postal code.',
          },
          street: {
            type: 'string',
            description: 'Street and number.',
          },
        },
        required: [],
      },
      responsible_person_contact: {
        type: 'object',
        description:
          'Contact to responsible person. At least one of the following fields is required: `email` or `formUrl`.',
        properties: {
          email: {
            type: 'string',
            description: 'Email of responsible person.',
          },
          formUrl: {
            type: 'string',
            description: 'URL address to contact form.',
          },
          phoneNumber: {
            type: 'string',
            description: 'Phone number of responsible person. This field is optional.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.responsiblePersons.create(body));
};

export default { metadata, tool, handler };
