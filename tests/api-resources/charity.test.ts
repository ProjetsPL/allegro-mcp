// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource charity', () => {
  // skipped: tests are disabled for the time being
  test.skip('listFundraisingCampaigns: only required params', async () => {
    const responsePromise = client.charity.listFundraisingCampaigns({ limit: 2, phrase: 'phrase' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listFundraisingCampaigns: required and optional params', async () => {
    const response = await client.charity.listFundraisingCampaigns({ limit: 2, phrase: 'phrase' });
  });
});
