// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.turnover_discount',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/turnover-discount/{marketplaceId}',
  operationId: 'createOrModifyTurnoverDiscountUsingPUT',
};

export const tool: Tool = {
  name: 'update_sale_turnover_discount',
  description:
    'Create or modify the turnover discount for the specified marketplace. Currently, the only supported marketplace is `allegro-business-cz`. <br/> Turnover discount is assigned to all offers available on the given marketplace. Only B2B users will see and be eligible for this discount. In order to create a turnover discount definition, you also have to be a B2B user. <br/> Created turnover discount becomes visible for B2B users with the first day of the next month. Since that day, B2B users begin cumulating their spending on your offers they purchased. Turnover cumulated within the month translate into appropriate percentage of the discount for all orders of your offers in the following month. <br/> Turnover discount created in a given month is susceptible for change only until the end of that month. After that, as mentioned before, turnover discount becomes available for the users and can no longer be modified instantly. Modifying turnover discount in such case will result in creation of the new definition of the discount. This new definition will become available for the users on the same basis that the previously created one, with the start of the next month. Also, similarly, newly created definition can be modified only until the the end of the month. Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#utworz-lub-edytuj-rabat-obrotowy" target="_blank">PL</a> / <a href="../..//tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#create-or-edit-turnover-discount" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      marketplaceId: {
        type: 'string',
      },
      thresholds: {
        type: 'array',
        description: 'List of thresholds to apply to cumulated turnover.',
        items: {
          $ref: '#/$defs/turnover_discount_threshold_dto',
        },
      },
    },
    $defs: {
      turnover_discount_threshold_dto: {
        type: 'object',
        description: 'Turnover discount threshold.',
        properties: {
          discount: {
            type: 'object',
            description: 'Discount obtained by user after reaching turnover threshold.',
            properties: {
              percentage: {
                type: 'string',
                description: 'Discount percentage value. The fractional part must be absent or equal to 0.',
              },
            },
            required: [],
          },
          minimumTurnover: {
            type: 'object',
            description:
              'The minimum turnover that the buyer is required to accumulate in order to receive a discount for the next month.',
            properties: {
              amount: {
                type: 'string',
                description:
                  'Amount of the minimal turnover. The fractional part must be absent or equal to 0.',
              },
              currency: {
                type: 'string',
                description:
                  'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217). Must meet the base currency for the marketplace.',
              },
            },
            required: [],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { marketplaceId, ...body } = args as any;
  return client.sale.turnoverDiscount.update(marketplaceId, body);
};

export default { metadata, tool, handler };
