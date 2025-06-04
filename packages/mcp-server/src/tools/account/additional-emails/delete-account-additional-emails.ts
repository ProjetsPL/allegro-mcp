// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'account.additional_emails',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/account/additional-emails/{emailId}',
  operationId: 'deleteAdditionalEmailUsingDELETE',
};

export const tool: Tool = {
  name: 'delete_account_additional_emails',
  description:
    'Use this resource to delete one of additional emails. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-usunac-adres-e-mail" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-remove-e-mail" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      emailId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { emailId, ...body } = args as any;
  return client.account.additionalEmails.delete(emailId);
};

export default { metadata, tool, handler };
