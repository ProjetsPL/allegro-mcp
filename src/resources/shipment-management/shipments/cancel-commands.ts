// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CreateCommandsAPI from './create-commands';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CancelCommands extends APIResource {
  /**
   * Use this resource to cancel parcel. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-anulowac-paczke" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-cancel-a-shipment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const cancelCommand =
   *   await client.shipmentManagement.shipments.cancelCommands.cancel(
   *     {
   *       input: {
   *         shipmentId: 'ba88f0fb-acf3-438a-877e-580da50c0874',
   *       },
   *     },
   *   );
   * ```
   */
  cancel(body: CancelCommandCancelParams, options?: RequestOptions): APIPromise<CancelCommand> {
    return this._client.post('/shipment-management/shipments/cancel-commands', {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get parcel cancellation status. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-sprawdzic-status-anulowania-paczki" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-check-shipment-cancellation-status" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.shipments.cancelCommands.getStatus(
   *     '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
   *   );
   * ```
   */
  getStatus(commandID: string, options?: RequestOptions): APIPromise<CancelCommandGetStatusResponse> {
    return this._client.get(path`/shipment-management/shipments/cancel-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface CancelCommand {
  input: CancelCommand.Input;

  /**
   * Command UUID. If empty, then system generate new one.
   */
  commandId?: string;
}

export namespace CancelCommand {
  export interface Input {
    shipmentId: string;
  }
}

export interface CancelCommandGetStatusResponse {
  /**
   * Command UUID
   */
  commandId?: string;

  /**
   * List of errors. Available only, if operation finished with ERROR.
   */
  errors?: Array<CreateCommandsAPI.Error400>;

  /**
   * Generated shipment ID. Available only, if operation finished with SUCCESS.
   */
  shipmentId?: string;

  status?: 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
}

export interface CancelCommandCancelParams {
  input: CancelCommandCancelParams.Input;

  /**
   * Command UUID. If empty, then system generate new one.
   */
  commandId?: string;
}

export namespace CancelCommandCancelParams {
  export interface Input {
    shipmentId: string;
  }
}

export declare namespace CancelCommands {
  export {
    type CancelCommand as CancelCommand,
    type CancelCommandGetStatusResponse as CancelCommandGetStatusResponse,
    type CancelCommandCancelParams as CancelCommandCancelParams,
  };
}
