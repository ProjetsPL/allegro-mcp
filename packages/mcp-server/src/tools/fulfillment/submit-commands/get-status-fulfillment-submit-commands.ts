// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.submit_commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fulfillment/submit-commands/{command-id}',
  operationId: 'getSubmitCommand',
};

export const tool: Tool = {
  name: 'get_status_fulfillment_submit_commands',
  description:
    'Use this resource to get submit status of the Advance Ship Notice. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#zakoncz-edycje-i-wyslij-awizo" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#finish-editing-and-submit-the-advance-ship-notice" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      'command-id': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { 'command-id': command_id, ...body } = args as any;
  return asTextContentResult(await client.fulfillment.submitCommands.getStatus(command_id));
};

export default { metadata, tool, handler };
