// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groups', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.sale.offerAdditionalServices.groups.create({
      additionalServices: [
        { configurations: [{}], definition: { id: 'GIFT_WRAP' }, description: 'description' },
      ],
      language: 'pl-PL',
      name: 'Gift wrap only',
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
    const response = await client.sale.offerAdditionalServices.groups.create({
      additionalServices: [
        {
          configurations: [
            {
              constraintCriteria: {
                country: 'country',
                deliveryMethods: [{ id: '5637592a-0a24-4771-b527-d89b2767d821' }],
                type: 'COUNTRY_SAME_QUANTITY',
              },
              price: { amount: '123.45', currency: 'PLN' },
            },
          ],
          definition: { id: 'GIFT_WRAP' },
          description: 'description',
        },
      ],
      language: 'pl-PL',
      name: 'Gift wrap only',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.sale.offerAdditionalServices.groups.retrieve('groupId');
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
    const responsePromise = client.sale.offerAdditionalServices.groups.update('groupId', {
      additionalServices: [
        { configurations: [{}], definition: { id: 'GIFT_WRAP' }, description: 'description' },
      ],
      language: 'pl-PL',
      name: 'Gift wrap only',
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
    const response = await client.sale.offerAdditionalServices.groups.update('groupId', {
      additionalServices: [
        {
          configurations: [
            {
              constraintCriteria: {
                country: 'country',
                deliveryMethods: [{ id: '5637592a-0a24-4771-b527-d89b2767d821' }],
                type: 'COUNTRY_SAME_QUANTITY',
              },
              price: { amount: '123.45', currency: 'PLN' },
            },
          ],
          definition: { id: 'GIFT_WRAP' },
          description: 'description',
        },
      ],
      language: 'pl-PL',
      name: 'Gift wrap only',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.sale.offerAdditionalServices.groups.list();
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
      client.sale.offerAdditionalServices.groups.list(
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });
});
