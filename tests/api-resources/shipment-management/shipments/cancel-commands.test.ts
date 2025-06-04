// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cancelCommands', () => {
  // skipped: tests are disabled for the time being
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.shipmentManagement.shipments.cancelCommands.cancel({
      input: { shipmentId: 'ba88f0fb-acf3-438a-877e-580da50c0874' },
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
  test.skip('cancel: required and optional params', async () => {
    const response = await client.shipmentManagement.shipments.cancelCommands.cancel({
      input: { shipmentId: 'ba88f0fb-acf3-438a-877e-580da50c0874' },
      commandId: '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatus', async () => {
    const responsePromise = client.shipmentManagement.shipments.cancelCommands.getStatus(
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
