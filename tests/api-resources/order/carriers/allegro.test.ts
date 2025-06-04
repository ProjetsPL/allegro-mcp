// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource allegro', () => {
  // skipped: tests are disabled for the time being
  test.skip('listPoints', async () => {
    const responsePromise = client.order.carriers.allegro.listPoints();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPoints: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.order.carriers.allegro.listPoints(
        { carriers: ['UPS'], 'If-Modified-Since': 'Sat, 01 Dec 2018 10:00:00 GMT' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });
});
