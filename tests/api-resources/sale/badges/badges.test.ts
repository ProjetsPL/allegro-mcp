// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource badges', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.sale.badges.list();
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
      client.sale.badges.list(
        { limit: 1, marketplace: { id: 'allegro-pl' }, offer: { id: 'id' }, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('apply: only required params', async () => {
    const responsePromise = client.sale.badges.apply({
      campaign: { id: 'BARGAIN' },
      offer: { id: '12345678' },
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
  test.skip('apply: required and optional params', async () => {
    const response = await client.sale.badges.apply({
      campaign: { id: 'BARGAIN' },
      offer: { id: '12345678' },
      prices: { bargain: { amount: '9.99', currency: 'PLN' } },
      purchaseConstraints: { limit: { perUser: { maxItems: 1 } } },
    });
  });
});
