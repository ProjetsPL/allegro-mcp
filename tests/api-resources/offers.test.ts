// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource offers', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.offers.list();
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
      client.offers.list(
        {
          category: { id: 'id' },
          currency: 'currency',
          'Dynamic filters': { foo: 'string' },
          fallback: true,
          include: 'include',
          limit: 1,
          marketplaceId: 'marketplaceId',
          offset: 0,
          phrase: 'phrase',
          searchMode: 'REGULAR',
          seller: { id: 'id', login: 'login' },
          shipping: { country: 'country' },
          sort: 'relevance',
          'Accept-Language': 'pl-PL',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('changePrice: only required params', async () => {
    const responsePromise = client.offers.changePrice('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      offerId: 'offerId',
      input: { buyNowPrice: { amount: '123.45', currency: 'PLN' } },
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
  test.skip('changePrice: required and optional params', async () => {
    const response = await client.offers.changePrice('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      offerId: 'offerId',
      input: { buyNowPrice: { amount: '123.45', currency: 'PLN' } },
      id: '6365996a-6cae-11e9-a923-1681be663d3e',
    });
  });
});
