// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.responsible_producers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/responsible-producers/{id}',
  operationId: 'responsibleProducersPUT',
};

export const tool: Tool = {
  name: 'update_sale_responsible_producers',
  description:
    'Use this resource to update the responsible producer for the compliance of the product with EU regulations. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Responsible producer ID.',
      },
      Accept: {
        type: 'string',
      },
      name: {
        type: 'string',
        description:
          "Internal name of responsible producer in dictionary (visible only to you). Can't start or end with whitespace. Can't contain whitespaces other than space. Can't contain multiple spaces in a row.",
      },
      producerData: {
        type: 'object',
        description: 'Responsible producer data.',
        properties: {
          address: {
            $ref: '#/$defs/responsible_producer_address',
          },
          contact: {
            $ref: '#/$defs/responsible_producer_contact',
          },
          tradeName: {
            type: 'string',
            description:
              'Name of company, first name and last name or trade name of company responsible for producing product.',
          },
        },
        required: [],
      },
    },
    $defs: {
      responsible_producer_address: {
        type: 'object',
        description: 'Responsible producer address.',
        properties: {
          city: {
            type: 'string',
            description: 'City.',
          },
          countryCode: {
            type: 'string',
            description: 'Code of responsible producer country (ISO 3166).',
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
      responsible_producer_contact: {
        type: 'object',
        description:
          'Contact to responsible producer. At least one of the following fields is required: `email` or `formUrl`.',
        properties: {
          email: {
            type: 'string',
            description: 'Email of responsible producer.',
          },
          formUrl: {
            type: 'string',
            description: 'URL address to contact form.',
          },
          phoneNumber: {
            type: 'string',
            description: 'Phone number of responsible producer. This field is optional.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.sale.responsibleProducers.update(id, body));
};

export default { metadata, tool, handler };
