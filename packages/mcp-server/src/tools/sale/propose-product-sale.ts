// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/product-proposals',
  operationId: 'proposeSaleProduct',
};

export const tool: Tool = {
  name: 'propose_product_sale',
  description:
    'Use this resource to propose a product. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-utworzyc-nowy-produkt" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-create-a-product" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
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
        description: "Language of provided product data (name, description, parameters's values).",
      },
      name: {
        type: 'string',
        description: 'Suggested product name.',
      },
      parameters: {
        type: 'array',
        description: 'List of product parameters.',
        items: {
          $ref: '#/$defs/product_parameter',
        },
      },
      description: {
        $ref: '#/$defs/standardized_description',
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
      standardized_description: {
        type: 'object',
        description: 'The description section cannot have more than 40000 bytes in length.',
        properties: {
          sections: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                items: {
                  type: 'array',
                  items: {
                    type: 'object',
                    description: 'One of: TextItem, ImageItem',
                    properties: {
                      type: {
                        type: 'string',
                      },
                    },
                    required: ['type'],
                  },
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.proposeProduct(body);
};

export default { metadata, tool, handler };
