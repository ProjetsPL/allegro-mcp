// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pointsOfService', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.pointsOfService.create({
      address: { city: 'city', countryCode: 'PL', state: 'state', zipCode: 'zipCode' },
      confirmationType: 'confirmationType',
      name: 'name',
      openHours: [{ dayOfWeek: 'dayOfWeek', from: 'from', to: 'to' }],
      status: 'status',
      type: 'type',
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
    const response = await client.pointsOfService.create({
      address: {
        city: 'city',
        countryCode: 'PL',
        state: 'state',
        zipCode: 'zipCode',
        coordinates: { lat: -90, lon: -180 },
        street: 'street',
      },
      confirmationType: 'confirmationType',
      name: 'name',
      openHours: [{ dayOfWeek: 'dayOfWeek', from: 'from', to: 'to' }],
      status: 'status',
      type: 'type',
      id: 'id',
      createdAt: 'createdAt',
      email: 'email',
      externalId: 'externalId',
      locations: [{ id: 'id' }],
      payments: [{ method: 'method' }],
      phoneNumber: 'phoneNumber',
      seller: { id: 'id' },
      serviceTime: 'serviceTime',
      updatedAt: 'updatedAt',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.pointsOfService.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.pointsOfService.update('id', {
      address: { city: 'city', countryCode: 'PL', state: 'state', zipCode: 'zipCode' },
      confirmationType: 'confirmationType',
      name: 'name',
      openHours: [{ dayOfWeek: 'dayOfWeek', from: 'from', to: 'to' }],
      status: 'status',
      type: 'type',
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
    const response = await client.pointsOfService.update('id', {
      address: {
        city: 'city',
        countryCode: 'PL',
        state: 'state',
        zipCode: 'zipCode',
        coordinates: { lat: -90, lon: -180 },
        street: 'street',
      },
      confirmationType: 'confirmationType',
      name: 'name',
      openHours: [{ dayOfWeek: 'dayOfWeek', from: 'from', to: 'to' }],
      status: 'status',
      type: 'type',
      body_id: 'id',
      createdAt: 'createdAt',
      email: 'email',
      externalId: 'externalId',
      locations: [{ id: 'id' }],
      payments: [{ method: 'method' }],
      phoneNumber: 'phoneNumber',
      seller: { id: 'id' },
      serviceTime: 'serviceTime',
      updatedAt: 'updatedAt',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.pointsOfService.list();
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
      client.pointsOfService.list(
        { countryCode: 'countryCode', seller: { id: 'id' } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.pointsOfService.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
