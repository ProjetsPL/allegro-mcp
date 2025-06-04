// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource changeProposals', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.sale.products.changeProposals.create('productId', {
      category: {},
      images: [{}],
      language: 'language',
      name: 'iPhone 5s',
      parameters: [{ id: 'id' }],
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
    const response = await client.sale.products.changeProposals.create('productId', {
      category: { id: '257931' },
      images: [{ url: 'https://a.allegroimg.com/original/00e0c9/1d7c95614fd6a7c713b075d0251a' }],
      language: 'language',
      name: 'iPhone 5s',
      parameters: [
        {
          id: 'id',
          options: { identifiesProduct: true },
          rangeValue: { from: '20', to: '80' },
          unit: 'unit',
          values: ['string'],
          valuesIds: ['string'],
          valuesLabels: ['string'],
        },
      ],
      note: 'Some additional note to product changes proposal.',
      notifyViaEmailAfterVerification: true,
      'Accept-Language': 'pl-PL',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.sale.products.changeProposals.retrieve('changeProposalId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sale.products.changeProposals.retrieve(
        'changeProposalId',
        { 'Accept-Language': 'pl-PL' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });
});
