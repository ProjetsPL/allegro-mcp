// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource shipmentManagement', () => {
  // skipped: tests are disabled for the time being
  test.skip('createLabel: required and optional params', async () => {
    const response = await client.shipmentManagement.createLabel({
      shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
      cutLine: true,
      pageSize: 'A4',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createProtocol: required and optional params', async () => {
    const response = await client.shipmentManagement.createProtocol({
      shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listDeliveryServices', async () => {
    const responsePromise = client.shipmentManagement.listDeliveryServices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listPickupProposals: only required params', async () => {
    const responsePromise = client.shipmentManagement.listPickupProposals({
      shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
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
  test.skip('listPickupProposals: required and optional params', async () => {
    const response = await client.shipmentManagement.listPickupProposals({
      shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
      address: {
        city: 'Warszawa',
        countryCode: 'SE',
        email: 'email@mail.com',
        phone: '500600700',
        postalCode: '10-200',
        street: 'Główna 30',
        company: 'Allegro.pl sp. z o.o.',
        name: 'Jan Kowalski',
        point: 'A1234567',
        state: 'AL',
      },
      readyDate: '2020-01-01',
    });
  });
});
