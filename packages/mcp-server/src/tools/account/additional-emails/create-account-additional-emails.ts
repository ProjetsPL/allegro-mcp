// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'account.additional_emails',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/account/additional-emails',
  operationId: 'addAdditionalEmailUsingPOST',
};

export const tool: Tool = {
  name: 'create_account_additional_emails',
  description:
    'Use this resource to add a new additional email address to account. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-dodac-adres-e-mail" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-add-an-additional-email" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description:
          'A valid email address you want to add to your account. Maximum length of the part before the `@` sign is 64 characters.',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.account.additionalEmails.create(body);
};

export default { metadata, tool, handler };
