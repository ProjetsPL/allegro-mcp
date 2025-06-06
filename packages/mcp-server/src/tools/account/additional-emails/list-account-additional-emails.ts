// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'account.additional_emails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account/additional-emails',
  operationId: 'getListOfAdditionalEmailsUsingGET',
};

export const tool: Tool = {
  name: 'list_account_additional_emails',
  description:
    'Use this resource to get a list of all additional email addresses assigned to account. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-adresy-e-mail" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-email-addresses" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.account.additionalEmails.list());
};

export default { metadata, tool, handler };
