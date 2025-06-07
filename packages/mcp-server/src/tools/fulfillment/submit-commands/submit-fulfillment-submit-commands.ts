// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'fulfillment.submit_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/fulfillment/submit-commands/{command-id}',
  operationId: 'submitCommand',
};

export const tool: Tool = {
  name: 'submit_fulfillment_submit_commands',
  description:
    'Use this resource to submit the Advance Ship Notice. After this operation, updates of the Advance Ship Notice are limited to selected properties only. See <a href="../../documentation#operation/updateSubmittedAdvanceShipNotice">PUT /fulfillment/advance-ship-notices/{id}/submitted</a>. Read more: <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#zakoncz-edycje-i-wyslij-awizo" target="_blank">PL</a> / <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#finish-editing-and-submit-the-advance-ship-notice" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      'command-id': {
        type: 'string',
      },
      input: {
        type: 'object',
        description: 'Represents input of the Advance Ship Notice submit command.',
        properties: {
          advanceShipNoticeId: {
            type: 'string',
            description: 'The Advance Ship Notice identifier.',
          },
        },
        required: ['advanceShipNoticeId'],
      },
      id: {
        type: 'string',
        description: 'The identifier of command.',
      },
      output: {
        type: 'object',
        description: 'Represents output of the Advance Ship Notice submit command.',
        properties: {
          status: {
            type: 'string',
            description: 'The command status.',
          },
        },
        required: ['status'],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { 'command-id': command_id, ...body } = args as any;
  return asTextContentResult(await client.fulfillment.submitCommands.submit(command_id, body));
};

export default { metadata, tool, handler };
