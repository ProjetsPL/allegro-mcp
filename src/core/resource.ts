// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AllegroAPI } from '../client';

export abstract class APIResource {
  protected _client: AllegroAPI;

  constructor(client: AllegroAPI) {
    this._client = client;
  }
}
