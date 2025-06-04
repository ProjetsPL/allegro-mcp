// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI, { toFile } from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messageAttachments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.messaging.messageAttachments.create({ filename: 'filename', size: 0 });
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
    const response = await client.messaging.messageAttachments.create({ filename: 'filename', size: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: only required params', async () => {
    const responsePromise = client.messaging.messageAttachments.upload('attachmentId', {
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.messaging.messageAttachments.upload('attachmentId', {
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
