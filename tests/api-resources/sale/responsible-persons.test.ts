// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource responsiblePersons', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.sale.responsiblePersons.create({
      Accept: 'application/vnd.allegro.public.v1+json',
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
    const response = await client.sale.responsiblePersons.create({
      Accept: 'application/vnd.allegro.public.v1+json',
      name: 'Person responsible for batteries',
      personalData: {
        address: { city: 'Warszawa', countryCode: 'PL', postalCode: '00-000', street: 'Wiśniowa 1' },
        contact: {
          email: 'some@email.com',
          formUrl: 'https://example.com/contact',
          phoneNumber: '123123123',
        },
        name: 'Responsible person company name',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.sale.responsiblePersons.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      Accept: 'application/vnd.allegro.public.v1+json',
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
    const response = await client.sale.responsiblePersons.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      Accept: 'application/vnd.allegro.public.v1+json',
      body_id: 'fee43309-8761-43f9-9cfd-a43e539a0fc5',
      name: 'Person responsible for batteries',
      personalData: {
        address: { city: 'Warszawa', countryCode: 'PL', postalCode: '00-000', street: 'Wiśniowa 1' },
        contact: {
          email: 'some@email.com',
          formUrl: 'https://example.com/contact',
          phoneNumber: '123123123',
        },
        name: 'Responsible person company name',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.sale.responsiblePersons.list({
      Accept: 'application/vnd.allegro.public.v1+json',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.sale.responsiblePersons.list({
      Accept: 'application/vnd.allegro.public.v1+json',
      limit: 1,
      offset: 0,
    });
  });
});
