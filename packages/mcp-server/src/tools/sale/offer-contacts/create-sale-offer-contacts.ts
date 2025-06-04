// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_contacts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/offer-contacts',
  operationId: 'createContactUsingPOST',
};

export const tool: Tool = {
  name: 'create_sale_offer_contacts',
  description:
    'Use this resource to create a new contact. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-utworzyc-nowy-kontakt" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-create-new-contact" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      emails: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            address: {
              type: 'string',
              description:
                "The contact's email address. The user part (before `@`) cannot be longer than 64 characters.",
            },
          },
          required: [],
        },
      },
      name: {
        type: 'string',
      },
      phones: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            number: {
              type: 'string',
              description: 'A valid phone number',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.offerContacts.create(body);
};

export default { metadata, tool, handler };
