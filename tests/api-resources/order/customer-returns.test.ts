// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customerReturns', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.order.customerReturns.retrieve('customerReturnId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.order.customerReturns.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.customerReturns.list(
        {
          buyer: { email: 'email', login: 'login' },
          createdAt: { gte: 'gte', lte: 'lte' },
          customerReturnId: 'customerReturnId',
          from: 'from',
          items: { name: 'name', offerId: 'offerId' },
          limit: 1,
          marketplaceId: 'marketplaceId',
          offset: 0,
          orderId: 'orderId',
          parcels: {
            carrierId: 'carrierId',
            sender: 'sender',
            transportingCarrierId: 'transportingCarrierId',
            transportingWaybill: 'transportingWaybill',
            waybill: 'waybill',
          },
          referenceNumber: 'referenceNumber',
          status: 'status',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('rejectRefund: only required params', async () => {
    const responsePromise = client.order.customerReturns.rejectRefund('customerReturnId', {
      rejection: { code: 'REFUND_REJECTED' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('rejectRefund: required and optional params', async () => {
    const response = await client.order.customerReturns.rejectRefund('customerReturnId', {
      rejection: { code: 'REFUND_REJECTED', reason: 'Returned item is damaged.' },
    });
  });
});
