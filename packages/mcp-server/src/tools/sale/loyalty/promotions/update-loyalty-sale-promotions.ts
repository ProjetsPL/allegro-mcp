// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.loyalty.promotions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/loyalty/promotions/{promotionId}',
  operationId: 'updatePromotionUsingPUT',
};

export const tool: Tool = {
  name: 'update_loyalty_sale_promotions',
  description:
    'Use this resource to update a promotion by its unique id. <br> It supports editing bundle\'s discount, wholesale price lists and large order discounts. Read more about: Large order discount <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#edytuj-progi-rabatowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#edit-discount-thresholds" target="_blank">EN</a>, Wholesale price list <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#edytuj-cennik" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#edit-wholesale-price-list" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      promotionId: {
        type: 'string',
      },
      benefits: {
        type: 'array',
        description: 'What kind of rebate will be given',
        items: {
          $ref: '#/$defs/benefit',
        },
      },
      offerCriteria: {
        type: 'array',
        description: 'What offers will be included',
        items: {
          $ref: '#/$defs/seller_rebate_offer_criterion',
        },
      },
    },
    $defs: {
      benefit: {
        type: 'object',
        properties: {
          specification: {
            type: 'object',
            description:
              'One of: LargeOrderDiscountBenefitSpecification, WholesalePriceListBenefitSpecification, MultiPackBenefitSpecification',
            properties: {
              type: {
                type: 'string',
                description: 'Type of benefit.',
              },
            },
            required: ['type'],
          },
        },
        required: ['specification'],
      },
      seller_rebate_offer_criterion: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'Criteria type: CONTAINS_OFFERS or OFFERS_ASSIGNED_EXTERNALLY',
            enum: ['CONTAINS_OFFERS', 'OFFERS_ASSIGNED_EXTERNALLY', 'ALL_OFFERS'],
          },
          offers: {
            type: 'array',
            description: 'Set of offers – only if `type` is `CONTAINS_OFFERS`',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'Offer id',
                },
              },
              required: ['id'],
            },
          },
        },
        required: ['type'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { promotionId, ...body } = args as any;
  return client.sale.loyalty.promotions.update(promotionId, body);
};

export default { metadata, tool, handler };
