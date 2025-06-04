// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sale/smart',
  operationId: 'getSellerSmartClassificationGET',
};

export const tool: Tool = {
  name: 'get_smart_seller_classification_report_sale',
  description:
    'Use this resource to get a full Smart! seller classification report. Read more: <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#kwalifikacja-sprzedawcy" target="_blank">PL</a> / <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#seller-qualification" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      marketplaceId: {
        type: 'string',
        description:
          "Marketplace for which seller classification report will be returned. If not specified, the classification result for the seller's registration marketplace will be returned.",
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sale.getSmartSellerClassificationReport(body);
};

export default { metadata, tool, handler };
