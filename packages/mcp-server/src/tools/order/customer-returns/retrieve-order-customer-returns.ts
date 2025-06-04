// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AllegroAPI from 'allegro-api';

export const metadata: Metadata = {
  resource: 'order.customer_returns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/customer-returns/{customerReturnId}',
  operationId: 'getCustomerReturnById',
};

export const tool: Tool = {
  name: 'retrieve_order_customer_returns',
  description:
    'Use this resource to get customer returns by its identifier. Read more: <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-szczegolowe-informacje-o-zwrocie" target="_blank">PL</a> / <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-detailed-information-about-customer-return" target="_blank">EN</a>.',
  inputSchema: {
    type: 'object',
    properties: {
      customerReturnId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AllegroAPI, args: Record<string, unknown> | undefined) => {
  const { customerReturnId, ...body } = args as any;
  return client.order.customerReturns.retrieve(customerReturnId);
};

export default { metadata, tool, handler };
