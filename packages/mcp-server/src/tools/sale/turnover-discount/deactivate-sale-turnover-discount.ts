// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'sale.turnover_discount',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sale/turnover-discount/{marketplaceId}/deactivate',
  operationId: 'deactivateTurnoverDiscountsUsingPUT',
};

export const tool: Tool = {
  name: 'deactivate_sale_turnover_discount',
  description:
    'Deactivate turnover discount for a given marketplace. Read more: <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#deaktywuj-rabat-obrotowy" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#deactivate-turnover-discount" target="_blank">EN</a>. Currently, the only supported marketplace is `allegro-business-cz`. <br/> Turnover discount will stop being cumulated with the end of the current month. Discount based on cumulated turnover will stop being applied with the end of the next month. After that, the discount will be completely deactivated. <br/> When deactivating the discount that still has `ACTIVATING` status, turnover discount is deactivated immediately. In that case, no turnover discount will start being cumulated with the new month.',
  inputSchema: {
    type: 'object',
    properties: {
      marketplaceId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { marketplaceId, ...body } = args as any;
  return client.sale.turnoverDiscount.deactivate(marketplaceId);
};

export default { metadata, tool, handler };
