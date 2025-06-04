// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource advanceShipNotices', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.create({
      items: [{ product: { id: 'a1520fab-7801-4832-9ccd-fb068c707a74' }, quantity: 1 }],
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
    const response = await client.fulfillment.advanceShipNotices.create({
      items: [{ product: { id: 'a1520fab-7801-4832-9ccd-fb068c707a74' }, quantity: 1 }],
      handlingUnit: { amount: 1, labelsType: 'ONE_FULFILMENT', unitType: 'BOX' },
      shipping: { method: 'COURIER_BY_SELLER' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.retrieve(
      '84529ad2-2265-4e15-b76b-c17025d848f6',
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
  test.skip('update: only required params', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.update(
      '84529ad2-2265-4e15-b76b-c17025d848f6',
      {
        items: [{ product: { id: 'a1520fab-7801-4832-9ccd-fb068c707a74' }, quantity: 1 }],
        'if-match': '123456',
      },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.fulfillment.advanceShipNotices.update(
      '84529ad2-2265-4e15-b76b-c17025d848f6',
      {
        items: [{ product: { id: 'a1520fab-7801-4832-9ccd-fb068c707a74' }, quantity: 1 }],
        'if-match': '123456',
        handlingUnit: { amount: 1, labelsType: 'ONE_FULFILMENT', unitType: 'BOX' },
        shipping: { method: 'COURIER_BY_SELLER' },
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.list();
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
      client.fulfillment.advanceShipNotices.list(
        { limit: 1, offset: 0, status: ['DRAFT'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(AllegroAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('cancel', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.cancel(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('getLabels: required and optional params', async () => {
    const response = await client.fulfillment.advanceShipNotices.getLabels(
      '84529ad2-2265-4e15-b76b-c17025d848f6',
      { accept: 'application/pdf' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('getReceivingState', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.getReceivingState(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('updateSubmitted: only required params', async () => {
    const responsePromise = client.fulfillment.advanceShipNotices.updateSubmitted(
      '84529ad2-2265-4e15-b76b-c17025d848f6',
      { 'if-match': '123456' },
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
  test.skip('updateSubmitted: required and optional params', async () => {
    const response = await client.fulfillment.advanceShipNotices.updateSubmitted(
      '84529ad2-2265-4e15-b76b-c17025d848f6',
      {
        'if-match': '123456',
        handlingUnit: { amount: 1 },
        items: [{ product: { id: 'a1520fab-7801-4832-9ccd-fb068c707a74' }, quantity: 1 }],
        shipping: {
          courier: {
            id: 'DPD',
            name: 'Some Courier',
            trackingNumbers: ['00340433982034779798', '12340433982034779888'],
          },
          estimatedTimeOfArrival: '2020-08-26T12:52:04Z',
          thirdParty: { name: 'Company ABC', orderNumber: 'Order.2022.10.12.Allegro.1F' },
          truckLicencePlate: 'FZ12453',
        },
      },
    );
  });
});
