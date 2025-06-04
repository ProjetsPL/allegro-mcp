// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.products.change_proposals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/products/{productId}/change-proposals',
  operationId: 'productChangeProposal',
};

export const tool: Tool = {
  name: 'create_products_sale_change_proposals',
  description:
    'Use this resource to propose changes in product. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-zglosic-blad-w-produkcie" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-report-incorrect-data-in-a-product" target="_blank">EN</a>. This resource is limited to 100 suggestions per day for a single user.',
  inputSchema: {
    type: 'object',
    properties: {
      productId: {
        type: 'string',
      },
      category: {
        $ref: '#/$defs/product_category',
      },
      images: {
        type: 'array',
        description: 'List of product images. At least one image is required.',
        items: {
          $ref: '#/$defs/image_url',
        },
      },
      language: {
        type: 'string',
        description: 'Language of provided proposal data.',
      },
      name: {
        type: 'string',
        description: 'Proposed product name.',
      },
      parameters: {
        type: 'array',
        description: 'List of product parameters.',
        items: {
          $ref: '#/$defs/product_parameter',
        },
      },
      note: {
        type: 'string',
        description: 'Note about product changes proposal.',
      },
      notifyViaEmailAfterVerification: {
        type: 'boolean',
        description: 'Receive an email notification after product changes proposal resolution.',
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
    $defs: {
      product_category: {
        type: 'object',
        description: 'Product category',
        properties: {
          id: {
            type: 'string',
            description: 'Category identifier.',
          },
        },
        required: [],
      },
      image_url: {
        type: 'object',
        description: 'Image url',
        properties: {
          url: {
            type: 'string',
          },
        },
        required: [],
      },
      product_parameter: {
        type: 'object',
        description: "Product's parameter",
        properties: {
          id: {
            type: 'string',
          },
          options: {
            type: 'object',
            properties: {
              identifiesProduct: {
                type: 'boolean',
              },
            },
            required: [],
          },
          rangeValue: {
            $ref: '#/$defs/parameter_range_value',
          },
          unit: {
            type: 'string',
          },
          values: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          valuesIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          valuesLabels: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: ['id'],
      },
      parameter_range_value: {
        type: 'object',
        description: "Parameter's range value",
        properties: {
          from: {
            type: 'string',
          },
          to: {
            type: 'string',
          },
        },
        required: ['from', 'to'],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { productId, ...body } = args as any;
  return client.sale.products.changeProposals.create(productId, body);
};

export default { metadata, tool, handler };
