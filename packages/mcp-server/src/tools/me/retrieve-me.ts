// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'me',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/me',
  operationId: 'meGET',
};

export const tool: Tool = {
  name: 'retrieve_me',
  description:
    'Use this resource when you need basic information about authenticated user. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#informacje-o-uzytkowniku" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#information-about-user" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.me.retrieve());
};

export default { metadata, tool, handler };
