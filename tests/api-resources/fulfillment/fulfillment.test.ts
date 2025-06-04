// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fulfillment', () => {
  // skipped: tests are disabled for the time being
  test.skip('getAvailableProducts', async () => {
    const responsePromise = client.fulfillment.getAvailableProducts();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAvailableProducts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fulfillment.getAvailableProducts(
        { limit: 1, offset: 0, 'Accept-Language': 'pl-PL' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStock', async () => {
    const responsePromise = client.fulfillment.getStock();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStock: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fulfillment.getStock(
        {
          asnStatus: 'SUBMITTED',
          limit: 1,
          offset: 0,
          outOfStockInFrom: 0,
          outOfStockInTo: 0,
          phrase: 'xxx',
          productAvailability: ['SUFFICIENT'],
          productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          productStatus: 'UNFULFILLABLE',
          sort: 'available',
          'Accept-Language': 'en-US',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });
});
