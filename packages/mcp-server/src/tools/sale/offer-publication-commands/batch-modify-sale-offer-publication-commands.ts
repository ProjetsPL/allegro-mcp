// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_publication_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-publication-commands/{commandId}',
  operationId: 'changePublicationStatusUsingPUT',
};

export const tool: Tool = {
  name: 'batch_modify_sale_offer_publication_commands',
  description:
    'Use this resource to modify multiple offers publication at once. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#publikacja-oferty" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-publication" target="_blank">EN</a>. This resource is rate limited to 250 000 offer changes per hour or 9000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
      offerCriteria: {
        type: 'array',
        description: 'List of offer criteria',
        items: {
          $ref: '#/$defs/offer_criterium',
        },
      },
      publication: {
        type: 'object',
        description: "Contains publication's fields to change",
        properties: {
          action: {
            type: 'string',
            description: 'Action to perform',
            enum: ['ACTIVATE', 'END'],
          },
          scheduledFor: {
            type: 'string',
            description: 'Date and time for scheduling ACTIVATE action, will be ignored for another actions',
            format: 'date-time',
          },
        },
        required: [],
      },
    },
    $defs: {
      offer_criterium: {
        type: 'object',
        description: 'Contains offers criteria',
        properties: {
          offers: {
            type: 'array',
            description: 'Set of offers',
            items: {
              $ref: '#/$defs/offer_id',
            },
          },
          type: {
            type: 'string',
            description: 'Criteria type: CONTAINS_OFFERS',
            enum: ['CONTAINS_OFFERS'],
          },
        },
        required: [],
      },
      offer_id: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Offer id',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { commandId, ...body } = args as any;
  return client.sale.offerPublicationCommands.batchModify(commandId, body);
};

export default { metadata, tool, handler };
