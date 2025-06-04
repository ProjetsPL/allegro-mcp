// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.offer_attachments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/offer-attachments',
  operationId: 'createOfferAttachmentUsingPOST',
};

export const tool: Tool = {
  name: 'create_sale_offer_attachments',
  description:
    'You can attach pdf, jpeg or png files to your offers. We will present them under the offer description in the Additional information section.\nYou can attach up to 9 files to one offer – one per each type from the list:\n  * Guide (MANUAL). Allowed media types: PDF\n  * Special offer terms (SPECIAL_OFFER_RULES). Allowed media types: PDF\n  * Competition terms (COMPETITION_RULES). Allowed media types: PDF\n  * Book excerpt (BOOK_EXCERPT). Allowed media types: PDF\n  * Manual (USER_MANUAL). Allowed media types: PDF\n  * Installation manual (INSTALLATION_INSTRUCTIONS). Allowed media types: PDF\n  * Game manual (GAME_INSTRUCTIONS). Allowed media types: PDF\n  * Energy label (ENERGY_LABEL). Allowed media types: JPEG, JPG, PNG\n  * Product information sheet (PRODUCT_INFORMATION_SHEET). Allowed media types: PDF\n  * Tire label (TIRE_LABEL). Allowed media types: JPEG, JPG, PNG\n\nYou can attach up to 20 files to one product for:\n  * Safety information manual (SAFETY_INFORMATION_MANUAL). Allowed media types: PDF, JPEG, JPG, PNG\n\nUploading attachments flow:\n  1. Create an attachment object to receive an upload URL (*POST /sale/offer-attachments*),\n  2. Use the upload URL to submit the file (*PUT /sale/offer-attachments/{attachmentId}*),\n  3. Add attachments to the offer (*PATCH /sale/product-offers/{offerId}*).\n\nRead more: <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#zalaczniki" target="_blank">PL</a> / <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#attachments" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
        },
        required: [],
      },
      type: {
        type: 'string',
        description: 'offer attachment type',
        enum: [
          'MANUAL',
          'SPECIAL_OFFER_RULES',
          'COMPETITION_RULES',
          'BOOK_EXCERPT',
          'USER_MANUAL',
          'INSTALLATION_INSTRUCTIONS',
          'GAME_INSTRUCTIONS',
          'ENERGY_LABEL',
          'PRODUCT_INFORMATION_SHEET',
          'TIRE_LABEL',
          'SAFETY_INFORMATION_MANUAL',
        ],
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.offerAttachments.create(body);
};

export default { metadata, tool, handler };
