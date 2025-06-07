// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'allegro-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sale/images',
  operationId: 'uploadOfferImageUsingPOST',
};

export const tool: Tool = {
  name: 'upload_image_sale',
  description:
    'Upload image to our servers.\nYou can choose from two upload options:\n  * \\- provide a link and we will download an image for you\n  * \\- send an image as binary data\n\n**Important!** Remember to use dedicated domain for upload, i.e.\n  * \\- https://upload.allegro.pl for Production\n  * \\- https://upload.allegro.pl.allegrosandbox.pl for Sandbox\n\nRead more about the rules for photos in an offer\'s gallery and description: <a href="https://help.allegro.com/pl/sell/a/zasady-dla-zdjec-w-galerii-i-w-opisie-8dvWz3eo4T5?marketplaceId=allegro-pl" target="_blank">PL</a> / <a href="https://help.allegro.com/en/sell/a/rules-for-images-in-the-gallery-and-in-descriptions-8dvWB8Y2PIq" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description:
          'URL of the image. It has to contain domain name, not an IP address. Currently we support http and https protocols. When using https the certificate chain needs to be valid.',
      },
    },
  },
};

export const handler = async (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sale.uploadImage(body));
};

export default { metadata, tool, handler };
