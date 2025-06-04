// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.product_offers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sale/product-offers/{offerId}',
  operationId: 'editProductOffers',
};

export const tool: Tool = {
  name: 'update_sale_product_offers',
  description:
    'Use this resource to edit offer. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-pojedynczej-oferty" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-single-offer" target="_blank">EN</a>. Note that requests may be limited.',
  inputSchema: {
    type: 'object',
    properties: {
      offerId: {
        type: 'string',
      },
      body: {
        allOf: [
          {
            $ref: '#/$defs/sale_product_offer_request_base',
          },
        ],
        description: 'Single offer data.',
      },
      'Accept-Language': {
        type: 'string',
        enum: ['en-US', 'pl-PL', 'uk-UA', 'sk-SK', 'cs-CZ', 'hu-HU'],
      },
    },
    $defs: {
      sale_product_offer_request_base: {
        allOf: [
          {
            $ref: '#/$defs/sale_product_offer',
          },
        ],
        description: 'Single offer data.',
      },
      sale_product_offer: {
        type: 'object',
        description: 'Single offer data.',
        properties: {
          description: {
            $ref: '#/$defs/standardized_description',
          },
          external: {
            $ref: '#/$defs/external_id',
          },
          images: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          location: {
            $ref: '#/$defs/location',
          },
          messageToSellerSettings: {
            type: 'object',
            description: 'Defines message to the seller settings options.',
            properties: {
              hint: {
                type: 'string',
                description: 'Specify hint for REQUIRED message displayed for buyer',
              },
              mode: {
                type: 'string',
                description:
                  'Specify message to seller type.\n * `OPTIONAL`: buyer is able to enter a message for the seller\n * `HIDDEN`: there is no message box for the seller\n * `REQUIRED`: buyer is forced to enter a message for the seller (limited to categories with `sellerCanRequirePurchaseComments` option)',
                enum: ['OPTIONAL', 'HIDDEN', 'REQUIRED'],
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description:
              'Name (title) of an offer. Length cannot be more than 75 characters. Read more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#tytul-oferty" target="_blank">PL</a>\n /\n<a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-title" target="_blank">EN</a> .',
          },
          payments: {
            type: 'object',
            properties: {
              invoice: {
                type: 'string',
                description: 'Invoice type',
                enum: ['VAT', 'VAT_MARGIN', 'WITHOUT_VAT', 'NO_INVOICE'],
              },
            },
            required: [],
          },
          sellingMode: {
            type: 'object',
            description: "Information on the offer's selling mode.",
            properties: {
              format: {
                $ref: '#/$defs/selling_mode_format',
              },
              minimalPrice: {
                $ref: '#/$defs/minimal_price',
              },
              price: {
                $ref: '#/$defs/buy_now_price',
              },
              startingPrice: {
                $ref: '#/$defs/starting_price',
              },
            },
            required: [],
          },
          sizeTable: {
            $ref: '#/$defs/size_table',
          },
          taxSettings: {
            type: 'object',
            description:
              'Tax settings for offer. Available settings can be found under <a href="#operation/getTaxSettingsForCategory" target="_blank">"get all tax settings for category" resource</a>.',
            properties: {
              rates: {
                type: 'array',
                description: 'Tax rates for offer.',
                items: {
                  type: 'object',
                  description: 'Offer tax rate for country.',
                  properties: {
                    countryCode: {
                      type: 'string',
                      description: 'Tax rate country code.',
                    },
                    rate: {
                      type: 'string',
                      description: 'Tax rate value.',
                    },
                  },
                  required: [],
                },
              },
              exemption: {
                type: 'string',
                description: 'The exemption of taxation for offer.',
              },
              subject: {
                type: 'string',
                description: 'The subject of taxation for offer.',
              },
            },
            required: ['rates'],
          },
        },
        required: [],
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
      external_id: {
        type: 'object',
        description: 'The information on the offer in an external system.',
        properties: {
          id: {
            type: 'string',
            description: 'The ID of the offer in the external system.',
          },
        },
        required: [],
      },
      location: {
        type: 'object',
        description:
          'for offer with a delivery method it is a parcel dispatch location. For offers with personal pick-up it is a pick-up location, additionally we recommend to use points of service (<a href="../../documentation/#tag/Points-of-service" target="_blank">https://developer.allegro.pl/documentation/#tag/Points-of-service</a>)',
        properties: {
          city: {
            type: 'string',
          },
          countryCode: {
            type: 'string',
            description: 'The 2-letter country code as defined in ISO 3166.',
          },
          postCode: {
            type: 'string',
            description:
              "The format of post code depends on 'countryCode'. For countryCode equal to 'PL', the expected format is 'XX-XXX', for other countries format is less restrictive - 12 characters or less are expected.",
          },
          province: {
            type: 'string',
            description:
              'This field is mandatory if countryCode is set to "PL", for other values, currently, it is ignored. For countryCode equalling "PL", this field must be set to one of the following: DOLNOSLASKIE, KUJAWSKO_POMORSKIE, LUBELSKIE, LUBUSKIE, LODZKIE, MALOPOLSKIE, MAZOWIECKIE, OPOLSKIE, PODKARPACKIE, PODLASKIE, POMORSKIE, SLASKIE, SWIETOKRZYSKIE, WARMINSKO_MAZURSKIE, WIELKOPOLSKIE, ZACHODNIOPOMORSKIE.',
          },
        },
        required: [],
      },
      selling_mode_format: {
        type: 'string',
        description: 'The selling format of the offer.',
        enum: ['BUY_NOW', 'AUCTION', 'ADVERTISEMENT'],
      },
      minimal_price: {
        type: 'object',
        description: 'The price data.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
          },
        },
        required: ['amount', 'currency'],
      },
      buy_now_price: {
        type: 'object',
        description: 'The price data.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
          },
        },
        required: ['amount', 'currency'],
      },
      starting_price: {
        type: 'object',
        description: 'The price data.',
        properties: {
          amount: {
            type: 'string',
            description: 'The amount provided in a string format to avoid rounding errors.',
          },
          currency: {
            type: 'string',
            description:
              'The currency provided as a 3-letter code in accordance with ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217).',
          },
        },
        required: ['amount', 'currency'],
      },
      size_table: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of size table',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { offerId, ...body } = args as any;
  return client.sale.productOffers.update(offerId, body);
};

export default { metadata, tool, handler };
