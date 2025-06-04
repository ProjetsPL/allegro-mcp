// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource refunds', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.payments.refunds.create({ payment: {}, reason: 'REFUND' });
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
    const response = await client.payments.refunds.create({
      payment: { id: 'a6bee8b2-8b4e-11e9-8918-07b31163120a' },
      reason: 'REFUND',
      additionalServices: { value: { amount: '123.45', currency: 'PLN' } },
      delivery: { value: { amount: '123.45', currency: 'PLN' } },
      lineItems: [
        {
          id: '09f0b4cc-7880-11e9-8f9e-2a86e4085a59',
          type: 'QUANTITY',
          quantity: 5,
          value: { amount: 'amount', currency: 'currency' },
        },
      ],
      overpaid: { value: { amount: '123.45', currency: 'PLN' } },
      sellerComment: 'Example seller comment.',
      surcharges: [
        { id: '09f0b4cc-7880-11e9-8f9e-2a86e4085a59', value: { amount: '123.45', currency: 'PLN' } },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.payments.refunds.list();
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
      client.payments.refunds.list(
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 1,
          occurredAt: { gte: '2019-12-27T18:11:19.117Z', lte: '2019-12-27T18:11:19.117Z' },
          offset: 0,
          payment: { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
          status: ['WAITING'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });
});
