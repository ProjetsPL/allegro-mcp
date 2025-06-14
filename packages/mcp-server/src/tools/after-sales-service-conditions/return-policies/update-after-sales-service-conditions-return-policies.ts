// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'after_sales_service_conditions.return_policies',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/after-sales-service-conditions/return-policies/{returnPolicyId}',
  operationId: 'updateAfterSalesServiceReturnPolicyUsingPUT',
};

export const tool: Tool = {
  name: 'update_after_sales_service_conditions_return_policies',
  description:
    'Use this resource to modify the return policy details. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-informacje-o-warunkach-zwrotu" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-return-policy-information" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      returnPolicyId: {
        type: 'string',
      },
      address: {
        $ref: '#/$defs/return_policy_address',
      },
      availability: {
        $ref: '#/$defs/return_policy_availability',
      },
      name: {
        type: 'string',
        description: 'Return policy name.',
      },
      options: {
        $ref: '#/$defs/return_policy_options',
      },
      returnCost: {
        $ref: '#/$defs/return_policy_return_cost',
      },
      contact: {
        $ref: '#/$defs/return_policy_contact',
      },
      withdrawalPeriod: {
        type: 'string',
        description: 'Period in ISO 8601 format. Only periods in full days are accepted.',
      },
    },
    $defs: {
      return_policy_address: {
        type: 'object',
        description: "The return address of the policy. Can be null if availability range is 'DISABLED'.",
        properties: {
          city: {
            type: 'string',
            description:
              "City name. Length is dependent on specified 'countryCode' - for PL, CZ and SK length is equal to 30 characters, for other countries - 200.",
          },
          countryCode: {
            type: 'string',
            description: 'Country code.',
          },
          name: {
            type: 'string',
            description:
              "Company or person name. Length is dependent on specified 'countryCode' - for CZ and SK length is equal to 50 characters, for other countries - 200.",
          },
          postCode: {
            type: 'string',
            description:
              "Post code format is dependent on 'countryCode' - PL='XX-XXX', CZ='XXX XX', SK='XXX XX' for other countries format is less restrictive - 16 characters alphanumeric with ' '(space) and '-' allowed.",
          },
          street: {
            type: 'string',
            description:
              "Street name. Length is dependent on specified 'countryCode' - for PL, CZ and SK length is equal to 35 characters, for other countries - 200.",
          },
        },
        required: ['city', 'countryCode', 'name', 'postCode', 'street'],
      },
      return_policy_availability: {
        type: 'object',
        properties: {
          range: {
            type: 'string',
            description: 'Indicates if return policy is full, restricted or disabled.',
            enum: ['FULL', 'RESTRICTED', 'DISABLED'],
          },
          restrictionCause: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
              },
              name: {
                type: 'string',
                description:
                  "Type of return policy restrictions. Required if range of policy is set to RESTRICTED or DISABLED, otherwise must be empty. Selected restriction depends on the chosen range of policy. Values 'ALCOHOL', 'FULLY_IMPLEMENTED_SERVICE' and 'BOOKED_SERVICE' are deprecated and should no longer be used. Read more info [PL](https://developer.allegro.pl/tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-zarzadzac-warunkami-zwrotow) / [EN](https://developer.allegro.pl/tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-manage-return-policies).",
                enum: [
                  'SEALED_MEDIA',
                  'SEALED_ITEM_NO_RETURN_DUE_HEALTH_OR_HYGIENE',
                  'CUSTOM_ITEM',
                  'SHORT_SHELF_LIFE',
                  'INSEPARABLY_LINKED',
                  'PRESS',
                  'MEDICINAL_PRODUCT',
                  'NOT_RECORDED_DIGITAL_CONTENT',
                  'VALUE_DEPENDENT_ON_FINANCIAL_MARKET',
                  'ALCOHOL',
                  'FULLY_IMPLEMENTED_SERVICE',
                  'BOOKED_SERVICE',
                ],
              },
            },
            required: [],
          },
        },
        required: ['range'],
      },
      return_policy_options: {
        type: 'object',
        description: "Can be null if availability range is 'DISABLED'.",
        properties: {
          businessReturnAllowed: {
            type: 'boolean',
            description: 'Returns for B2B purchases allowed',
          },
          cashOnDeliveryNotAllowed: {
            type: 'boolean',
            description: 'Order sent back with cash on pickup is not allowed',
          },
          collectBySellerOnly: {
            type: 'boolean',
            description: 'Return items are picked up by the seller',
          },
          freeAccessoriesReturnRequired: {
            type: 'boolean',
            description: 'If free accessories were added to the order, the client needs to send them back',
          },
          refundLoweredByReceivedDiscount: {
            type: 'boolean',
            description:
              'If there was a discount granted after the order, the return is lowered by the received discount',
          },
        },
        required: [
          'businessReturnAllowed',
          'cashOnDeliveryNotAllowed',
          'collectBySellerOnly',
          'freeAccessoriesReturnRequired',
          'refundLoweredByReceivedDiscount',
        ],
      },
      return_policy_return_cost: {
        type: 'object',
        description: "Can be null if availability range is 'DISABLED'.",
        properties: {
          coveredBy: {
            type: 'string',
            description: 'Indicates who covers the return delivery costs.',
            enum: ['SELLER', 'BUYER'],
          },
        },
        required: [],
      },
      return_policy_contact: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'A valid email address of the seller',
          },
          phoneNumber: {
            type: 'string',
            description: 'A valid phone number of the seller',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { returnPolicyId, ...body } = args as any;
  return asTextContentResult(
    await client.afterSalesServiceConditions.returnPolicies.update(returnPolicyId, body),
  );
};

export default { metadata, tool, handler };
