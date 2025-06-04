// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_modification_commands',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-modification-commands/{commandId}',
  operationId: 'modificationCommandUsingPUT',
};

export const tool: Tool = {
  name: 'update_sale_offer_modification_commands',
  description:
    'Use this resource to modify multiple offers at once. Read more: <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-wielu-ofert-jednoczesnie" target="_blank">PL</a> / <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-many-offers" target="_blank">EN</a>. This resource is rate limited to 250 000 offer changes per hour or 9000 offer changes per minute.',
  inputSchema: {
    type: 'object',
    properties: {
      commandId: {
        type: 'string',
      },
      modification: {
        type: 'object',
        description: 'Contains fields to change',
        properties: {
          additionalServicesGroup: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'Id of additional service group',
              },
            },
            required: [],
          },
          delivery: {
            type: 'object',
            description: 'Contains delivery details to change.',
            properties: {
              handlingTime: {
                type: 'string',
                description: 'Handling time, ISO 8601 duration format. PT0S for immediately.',
                enum: [
                  'PT0S',
                  'PT24H',
                  'PT48H',
                  'PT72H',
                  'PT96H',
                  'PT120H',
                  'PT168H',
                  'PT240H',
                  'PT336H',
                  'PT504H',
                  'PT720H',
                  'PT1440H',
                  'P2D',
                  'P3D',
                  'P4D',
                  'P5D',
                  'P7D',
                  'P10D',
                  'P14D',
                  'P21D',
                  'P30D',
                  'P60D',
                ],
              },
              shippingRates: {
                $ref: '#/$defs/shipping_rates',
              },
            },
            required: [],
          },
          discounts: {
            type: 'object',
            description: 'Allows you to assign/unassign discounts (rebates) to/from offers.',
            properties: {
              wholesalePriceList: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description:
                      'Promotion id of a wholesale price list to assign to the offer or `null` to unassign wholesale price list from the offer.',
                  },
                },
                required: [],
              },
            },
            required: [],
          },
          location: {
            $ref: '#/$defs/location',
          },
          marketedBeforeGPSRObligation: {
            type: 'boolean',
            description:
              'Allows you to declare whether the first product in the offer was marketed before the GPSR obligation.',
          },
          payments: {
            type: 'object',
            properties: {
              invoice: {
                type: 'string',
                description: 'Invoice type: VAT, VAT_MARGIN, WITHOUT_VAT, NO_INVOICE',
                enum: ['VAT', 'VAT_MARGIN', 'WITHOUT_VAT', 'NO_INVOICE'],
              },
              tax: {
                type: 'object',
                description: 'VAT tax rate.',
                properties: {
                  percentage: {
                    type: 'string',
                    description:
                      'The buy now tax rate, Format 0.00. The tax is linked to the default country that corresponds to the base marketplace of this offer.',
                  },
                },
                required: [],
              },
            },
            required: [],
          },
          publication: {
            type: 'object',
            description:
              'Allows you to change duration of the offers. You can include only property in a request "duration" or "durationUnlimited".',
            properties: {
              duration: {
                type: 'string',
                description:
                  'Offer duration time provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
                enum: [
                  'PT72H',
                  'PT120H',
                  'PT168H',
                  'PT240H',
                  'PT480H',
                  'PT720H',
                  'P3D',
                  'P5D',
                  'P7D',
                  'P10D',
                  'P20D',
                  'P30D',
                ],
              },
              durationUnlimited: {
                type: 'boolean',
                description: 'Unlimited duration time.',
              },
            },
            required: [],
          },
          responsiblePerson: {
            type: 'object',
            description: 'Allows you to assign/unassign responsible persons to/from offers.',
            properties: {
              id: {
                type: 'string',
                description:
                  'The ID of a responsible person configured using the <a href="#tag/Responsible-persons">Responsible persons API</a>.\n\n_Note: if the offer contains multiple products, the responsible person will only be changed for the first product._\n',
              },
            },
            required: [],
          },
          responsibleProducer: {
            type: 'object',
            description: 'Allows you to assign/unassign responsible producers to/from offers.',
            properties: {
              id: {
                type: 'string',
                description:
                  'The ID of a responsible producer configured using the <a href="#tag/Responsible-producers">Responsible Producers API</a>.\n\n_Note: if the offer contains multiple products, the responsible producer will only be changed for the first product._\n',
              },
            },
            required: [],
          },
          safetyInformation: {
            type: 'object',
            description: 'Allows you to set safety information in offers.',
            properties: {
              type: {
                type: 'string',
                description:
                  '_Note: if the offer contains multiple products, the safety information will only be changed for the first product._\n',
              },
            },
            required: ['type'],
          },
          sizeTable: {
            $ref: '#/$defs/size_table',
          },
        },
        required: [],
      },
      offerCriteria: {
        type: 'array',
        description: 'List of offer criteria',
        items: {
          $ref: '#/$defs/offer_criterium',
        },
      },
    },
    $defs: {
      shipping_rates: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id of shipping rates',
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
  return client.sale.offerModificationCommands.update(commandId, body);
};

export default { metadata, tool, handler };
