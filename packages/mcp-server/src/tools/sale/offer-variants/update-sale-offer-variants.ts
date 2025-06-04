// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_variants',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/offer-variants/{setId}',
  operationId: 'updateVariantSet',
};

export const tool: Tool = {
  name: 'update_sale_offer_variants',
  description:
    'Use this resource to edit variant set.\n\n A valid variant set must consist of three required elements:\n - name:\n   - it can\'t be blank and must not be longer than 75 characters\n - parameters:\n   - it should contain parameter identifiers used for offer grouping\n   - parameter identifiers from the offers and special `color/pattern` value (for grouping via image) are permitted\n   - it must contain at least one element (up to 2)\n - offers:\n   - it must contain at least 2 offers (500 at most)\n   - `colorPattern` value must be set for every offer if `color/pattern` parameter is used\n   - `colorPattern` value can\'t be blank and must not be longer than 50 characters\n   - `colorPattern` can take arbitrary string value like `red`, `b323592c-522f-4ec1-b9ea-3764538e0ac4` (UUID), etc.\n   - offers having the same image should have identical `colorPattern` value\n   - offers must have `publication.marketplaces.base` equal to `allegro-pl`\n\n\n Let\'s assume we have 4 offers:\n   - offer with id 2 having an image of a red t-shirt and S as a value of parameter with id 21\n   - offer with id 3 having an image of a red t-shirt and M as a value of parameter with id 21\n   - offer with id 4 having an image of a blue t-shirt and S as a value of parameter with id 21\n   - offer with id 5 having an image of a blue t-shirt and M as a value of parameter with id 21\n\n\n You can build a variant set by grouping offers using combination of available parameters - examples are available in <i>Request samples</i>.\n\n\n More general information about variant sets can be found [here](https://allegro.pl/pomoc/faq/wielowariantowosc-jak-polaczyc-oferty-xGgaOByGgTb#dodatkowe-informacje). Read more: <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#edytuj-oferte-wielowariantowa" target="_blank">PL</a> / <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#update-a-multi-variant-offer" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      setId: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      offers: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            colorPattern: {
              type: 'string',
              description:
                'Label that allows to group variants via image. All variants having the same image should have identical identifier in this field.',
            },
          },
          required: ['id'],
        },
      },
      parameters: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
          },
          required: ['id'],
        },
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { setId, ...body } = args as any;
  return client.sale.offerVariants.update(setId, body);
};

export default { metadata, tool, handler };
