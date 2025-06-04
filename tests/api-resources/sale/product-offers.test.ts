// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AllegroAPI from 'allegro-api';

const client = new AllegroAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productOffers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.sale.productOffers.create({ body: { stock: {} } });
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
    const response = await client.sale.productOffers.create({
      body: {
        delivery: {
          additionalInfo: 'Example additional info',
          handlingTime: 'PT24H',
          shippingRates: {},
          shipmentDate: '2019-12-27T18:11:19.117Z',
        },
        publication: {
          duration: 'PT24H',
          republish: false,
          startingAt: '2031-01-04T11:01:59Z',
          status: 'INACTIVE',
        },
        stock: { available: 99, unit: 'UNIT' },
        additionalMarketplaces: {
          'allegro-cz': { sellingMode: { price: { amount: '233.01', currency: 'CZK' } } },
        },
        additionalServices: { id: 'id', name: 'name' },
        attachments: [{ id: '07ee5e36-afc7-41eb-af49-3df5354ef85' }],
        b2b: { buyableOnlyByBusiness: false },
        compatibilityList: { items: [{ type: 'TEXT' }] },
        fundraisingCampaign: { id: 'id', name: 'name' },
        language: 'pl-PL',
        productSet: [
          {
            product: {
              id: 'c9e39cae-9cb6-11e9-a2a3-2a2ae2dbcce4',
              category: { id: '257931' },
              idType: 'GTIN',
              images: ['https://a.allegroimg.com/original/12068b/359d04074521b79df1b2807a6727'],
              name: 'iPhone 5s',
              parameters: [
                {
                  id: '224017',
                  name: 'Manufacturer code',
                  rangeValue: { from: '20', to: '80' },
                  values: ['4234'],
                  valuesIds: ['129970_850936'],
                },
              ],
            },
            quantity: { value: 1 },
            responsiblePerson: { id: '33960380-98fe-4b3d-b69e-b261526f2730', name: 'name' },
            responsibleProducer: { type: 'ID' },
            safetyInformation: { type: 'NO_SAFETY_INFORMATION' },
            marketedBeforeGPSRObligation: true,
          },
        ],
      },
      'Accept-Language': 'pl-PL',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.sale.productOffers.retrieve('offerId');
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
    const responsePromise = client.sale.productOffers.update('offerId', { body: {} });
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
    const response = await client.sale.productOffers.update('offerId', {
      body: {
        delivery: {
          additionalInfo: 'Example additional info',
          handlingTime: 'PT24H',
          shippingRates: {},
          shipmentDate: '2019-12-27T18:11:19.117Z',
        },
        publication: {
          duration: 'PT24H',
          republish: false,
          startingAt: '2031-01-04T11:01:59Z',
          status: 'INACTIVE',
        },
        additionalMarketplaces: {
          'allegro-cz': { sellingMode: { price: { amount: '233.01', currency: 'CZK' } } },
        },
        additionalServices: { id: 'id', name: 'name' },
        attachments: [{ id: '07ee5e36-afc7-41eb-af49-3df5354ef85' }],
        b2b: { buyableOnlyByBusiness: false },
        compatibilityList: { items: [{ type: 'TEXT' }] },
        fundraisingCampaign: { id: 'id', name: 'name' },
        language: 'pl-PL',
        productSet: [
          {
            product: {
              id: 'c9e39cae-9cb6-11e9-a2a3-2a2ae2dbcce4',
              category: { id: '257931' },
              idType: 'GTIN',
              images: ['https://a.allegroimg.com/original/12068b/359d04074521b79df1b2807a6727'],
              name: 'iPhone 5s',
              parameters: [
                {
                  id: '224017',
                  name: 'Manufacturer code',
                  rangeValue: { from: '20', to: '80' },
                  values: ['4234'],
                  valuesIds: ['129970_850936'],
                },
              ],
            },
            quantity: { value: 1 },
            responsiblePerson: { id: '33960380-98fe-4b3d-b69e-b261526f2730', name: 'name' },
            responsibleProducer: { type: 'ID' },
            safetyInformation: { type: 'NO_SAFETY_INFORMATION' },
            marketedBeforeGPSRObligation: true,
          },
        ],
        stock: { available: 99, unit: 'UNIT' },
      },
      'Accept-Language': 'pl-PL',
    });
  });

  // Prism doesn't properly handle redirects
  test.skip('checkOperationStatus: only required params', async () => {
    const responsePromise = client.sale.productOffers.checkOperationStatus('operationId', {
      offerId: 'offerId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't properly handle redirects
  test.skip('checkOperationStatus: required and optional params', async () => {
    const response = await client.sale.productOffers.checkOperationStatus('operationId', {
      offerId: 'offerId',
      'Accept-Language': 'pl-PL',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveParts: only required params', async () => {
    const responsePromise = client.sale.productOffers.retrieveParts('offerId', { include: ['stock'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveParts: required and optional params', async () => {
    const response = await client.sale.productOffers.retrieveParts('offerId', {
      include: ['stock'],
      'Accept-Language': 'pl-PL',
    });
  });
});
