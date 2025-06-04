// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutForms', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.order.checkoutForms.retrieve('29738e61-7f6a-11e8-ac45-09db60ede9d6');
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
    const responsePromise = client.order.checkoutForms.list();
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
      client.order.checkoutForms.list(
        {
          buyer: { login: 'login' },
          delivery: { method: 'method' },
          fulfillment: { shipmentSummary: 'shipmentSummary', status: 'status' },
          limit: 1,
          lineItems: { boughtAt: '2019-12-27T18:11:19.117Z' },
          marketplace: { id: 'id' },
          offset: 0,
          payment: { id: 'id' },
          sort: 'lineItems.boughtAt',
          status: 'status',
          surcharges: { id: 'id' },
          updatedAt: { gte: '2019-12-27T18:11:19.117Z', lte: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFulfillment', async () => {
    const responsePromise = client.order.checkoutForms.updateFulfillment('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
