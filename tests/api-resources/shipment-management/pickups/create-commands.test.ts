// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource createCommands', () => {
  // skipped: tests are disabled for the time being
  test.skip('getStatus', async () => {
    const responsePromise = client.shipmentManagement.pickups.createCommands.getStatus(
      '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('requestPickup: only required params', async () => {
    const responsePromise = client.shipmentManagement.pickups.createCommands.requestPickup({
      input: {
        pickupDateProposalId: '2023071210001300',
        shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
      },
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
  test.skip('requestPickup: required and optional params', async () => {
    const response = await client.shipmentManagement.pickups.createCommands.requestPickup({
      input: {
        pickupDateProposalId: '2023071210001300',
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
      },
      commandId: '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
    });
  });
});
