// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource createCommands', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.shipmentManagement.shipments.createCommands.create({
      input: {
        deliveryMethodId: 'c3066682-97a3-42fe-9eb5-3beeccab840c',
        packages: [
          {
            height: { unit: 'CENTIMETER', value: 12 },
            length: { unit: 'CENTIMETER', value: 12 },
            type: 'JS!?QOTHER',
            weight: { unit: 'KILOGRAMS', value: 12.45 },
            width: { unit: 'CENTIMETER', value: 12 },
          },
        ],
        receiver: {
          city: 'Warszawa',
          countryCode: 'SE',
          email: 'email@mail.com',
          phone: '500600700',
          postalCode: '10-200',
          street: 'Główna 30',
        },
        sender: {
          city: 'Warszawa',
          countryCode: 'SE',
          email: 'email@mail.com',
          phone: '500600700',
          postalCode: '10-200',
          street: 'Główna 30',
        },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.shipmentManagement.shipments.createCommands.create({
      input: {
        deliveryMethodId: 'c3066682-97a3-42fe-9eb5-3beeccab840c',
        packages: [
          {
            height: { unit: 'CENTIMETER', value: 12 },
            length: { unit: 'CENTIMETER', value: 12 },
            type: 'JS!?QOTHER',
            weight: { unit: 'KILOGRAMS', value: 12.45 },
            width: { unit: 'CENTIMETER', value: 12 },
            textOnLabel: 'textOnLabel',
          },
        ],
        receiver: {
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
        sender: {
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
        additionalProperties: { foo: 'string' },
        additionalServices: ['ADDITIONAL_HANDLING'],
        cashOnDelivery: {
          amount: '2.50',
          currency: 'PLN',
          iban: 'PL48109024022441789739167589',
          ownerName: 'Jan Kowalski',
        },
        credentialsId: 'c9e6f40a-3d25-48fc-838c-055ceb1c5bc0',
        insurance: { amount: '23.47', currency: 'PLN' },
        labelFormat: 'PDF',
        pickup: {
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
        referenceNumber: 'abcd1234',
      },
      commandId: '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatus', async () => {
    const responsePromise = client.shipmentManagement.shipments.createCommands.getStatus(
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
});
