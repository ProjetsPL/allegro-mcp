// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource returnPolicies', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.afterSalesServiceConditions.returnPolicies.create({
      address: {
        city: 'Poznań',
        countryCode: 'PL',
        name: 'Allegro.pl sp. z o.o.',
        postCode: '11-232',
        street: 'Grunwaldzka 182',
      },
      availability: { range: 'RESTRICTED' },
      name: 'name',
      options: {
        businessReturnAllowed: false,
        cashOnDeliveryNotAllowed: true,
        collectBySellerOnly: false,
        freeAccessoriesReturnRequired: true,
        refundLoweredByReceivedDiscount: true,
      },
      returnCost: {},
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
    const response = await client.afterSalesServiceConditions.returnPolicies.create({
      address: {
        city: 'Poznań',
        countryCode: 'PL',
        name: 'Allegro.pl sp. z o.o.',
        postCode: '11-232',
        street: 'Grunwaldzka 182',
      },
      availability: {
        range: 'RESTRICTED',
        restrictionCause: { description: 'description', name: 'SEALED_MEDIA' },
      },
      name: 'name',
      options: {
        businessReturnAllowed: false,
        cashOnDeliveryNotAllowed: true,
        collectBySellerOnly: false,
        freeAccessoriesReturnRequired: true,
        refundLoweredByReceivedDiscount: true,
      },
      returnCost: { coveredBy: 'SELLER' },
      contact: { email: 'useridentifier@domain.com', phoneNumber: '123 123 123' },
      withdrawalPeriod: 'P14D',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.afterSalesServiceConditions.returnPolicies.retrieve('returnPolicyId');
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
    const responsePromise = client.afterSalesServiceConditions.returnPolicies.update('returnPolicyId', {
      address: {
        city: 'Poznań',
        countryCode: 'PL',
        name: 'Allegro.pl sp. z o.o.',
        postCode: '11-232',
        street: 'Grunwaldzka 182',
      },
      availability: { range: 'RESTRICTED' },
      name: 'name',
      options: {
        businessReturnAllowed: false,
        cashOnDeliveryNotAllowed: true,
        collectBySellerOnly: false,
        freeAccessoriesReturnRequired: true,
        refundLoweredByReceivedDiscount: true,
      },
      returnCost: {},
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
    const response = await client.afterSalesServiceConditions.returnPolicies.update('returnPolicyId', {
      address: {
        city: 'Poznań',
        countryCode: 'PL',
        name: 'Allegro.pl sp. z o.o.',
        postCode: '11-232',
        street: 'Grunwaldzka 182',
      },
      availability: {
        range: 'RESTRICTED',
        restrictionCause: { description: 'description', name: 'SEALED_MEDIA' },
      },
      name: 'name',
      options: {
        businessReturnAllowed: false,
        cashOnDeliveryNotAllowed: true,
        collectBySellerOnly: false,
        freeAccessoriesReturnRequired: true,
        refundLoweredByReceivedDiscount: true,
      },
      returnCost: { coveredBy: 'SELLER' },
      contact: { email: 'useridentifier@domain.com', phoneNumber: '123 123 123' },
      withdrawalPeriod: 'P14D',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.afterSalesServiceConditions.returnPolicies.list();
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
      client.afterSalesServiceConditions.returnPolicies.list(
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.afterSalesServiceConditions.returnPolicies.delete('returnPolicyId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
