// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource compatibleProducts', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.sale.compatibleProducts.list({ type: 'CAR' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.sale.compatibleProducts.list({
      type: 'CAR',
      group: { id: 'id' },
      limit: 1,
      offset: 0,
      phrase: 'phrase',
      tecdoc: { kTypNr: 'kTypNr', nTypNr: 'nTypNr' },
      'If-Modified-Since': 'Sat, 01 Dec 2018 10:00:00 GMT',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listGroups: only required params', async () => {
    const responsePromise = client.sale.compatibleProducts.listGroups({ type: 'CAR' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listGroups: required and optional params', async () => {
    const response = await client.sale.compatibleProducts.listGroups({
      type: 'CAR',
      limit: 1,
      offset: 0,
      'If-Modified-Since': 'Sat, 01 Dec 2018 10:00:00 GMT',
    });
  });
});
