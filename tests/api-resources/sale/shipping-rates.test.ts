// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shippingRates', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.sale.shippingRates.create({
      rates: [{ deliveryMethod: {}, firstItemRate: {}, maxQuantityPerPackage: 1, nextItemRate: {} }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.sale.shippingRates.create({
      rates: [
        {
          deliveryMethod: { id: 'id' },
          firstItemRate: { amount: 'amount', currency: 'currency' },
          maxQuantityPerPackage: 1,
          nextItemRate: { amount: 'amount', currency: 'currency' },
          maxPackageWeight: { unit: 'unit', value: 'value' },
          shippingTime: { from: 'from', to: 'to' },
        },
      ],
      id: 'id',
      lastModified: 'lastModified',
      name: 'x',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.sale.shippingRates.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.sale.shippingRates.update('id', {
      rates: [{ deliveryMethod: {}, firstItemRate: {}, maxQuantityPerPackage: 1, nextItemRate: {} }],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.sale.shippingRates.update('id', {
      rates: [
        {
          deliveryMethod: { id: 'id' },
          firstItemRate: { amount: 'amount', currency: 'currency' },
          maxQuantityPerPackage: 1,
          nextItemRate: { amount: 'amount', currency: 'currency' },
          maxPackageWeight: { unit: 'unit', value: 'value' },
          shippingTime: { from: 'from', to: 'to' },
        },
      ],
      body_id: 'id',
      lastModified: 'lastModified',
      name: 'x',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.sale.shippingRates.list();
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
      client.sale.shippingRates.list({ marketplace: 'marketplace' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });
});
