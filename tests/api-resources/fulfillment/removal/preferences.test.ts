// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource preferences', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.fulfillment.removal.preferences.create({ operation: 'WITHDRAWAL' });
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
    const response = await client.fulfillment.removal.preferences.create({
      operation: 'WITHDRAWAL',
      address: {
        city: 'Poznań',
        company: 'Company Warehouse Ltd',
        countryCode: 'PL',
        phone: { countryCode: '4', number: '321669910225' },
        postalCode: '60-166',
        street: 'Uliczna 7',
        additionalInfo: 'Left doors in the warehouse.',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = client.fulfillment.removal.preferences.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
