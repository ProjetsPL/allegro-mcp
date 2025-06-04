// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource submitCommands', () => {
  // skipped: tests are disabled for the time being
  test.skip('getStatus', async () => {
    const responsePromise = client.fulfillment.submitCommands.getStatus(
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
  test.skip('submit: only required params', async () => {
    const responsePromise = client.fulfillment.submitCommands.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      input: { advanceShipNoticeId: '123a08d7-ab9b-460d-b9cb-d6ed64b3a018' },
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.fulfillment.submitCommands.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      input: { advanceShipNoticeId: '123a08d7-ab9b-460d-b9cb-d6ed64b3a018' },
      id: '71529ad2-2265-4e15-b76b-c17025d848f7',
      output: { status: 'RUNNING' },
    });
  });
});
