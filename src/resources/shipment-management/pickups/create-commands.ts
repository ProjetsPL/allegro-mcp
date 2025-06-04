// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ShipmentManagementAPI from '../shipment-management';
import * as ShipmentsCreateCommandsAPI from '../shipments/create-commands';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CreateCommands extends APIResource {
  /**
   * Use this resource to get pickup request status. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-sprawdzic-status-zamowienia-odbioru-paczek" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-check-shipment-pickup-request-status" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.pickups.createCommands.getStatus(
   *     '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
   *   );
   * ```
   */
  getStatus(commandID: string, options?: RequestOptions): APIPromise<CreateCommandGetStatusResponse> {
    return this._client.get(path`/shipment-management/pickups/create-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to request a pickup of shipments. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-zamowic-odbior-paczek-przez-kuriera" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-request-shipment-pickup-by-a-courier" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const createPickupCommand =
   *   await client.shipmentManagement.pickups.createCommands.requestPickup(
   *     {
   *       input: {
   *         pickupDateProposalId: '2023071210001300',
   *         shipmentIds: [
   *           'ba88f0fb-acf3-438a-877e-580da50c0874',
   *         ],
   *       },
   *     },
   *   );
   * ```
   */
  requestPickup(
    body: CreateCommandRequestPickupParams,
    options?: RequestOptions,
  ): APIPromise<CreatePickupCommand> {
    return this._client.post('/shipment-management/pickups/create-commands', {
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
}

export interface CreatePickupCommand {
  input: CreatePickupCommand.Input;

  /**
   * Command UUID. If empty, then system generate new one.
   */
  commandId?: string;
}

export namespace CreatePickupCommand {
  export interface Input {
    /**
     * Internal pickup proposal ID
     */
    pickupDateProposalId: string;

    shipmentIds: Array<string>;

    /**
     * Optional pickup address with optional drop-off point. If empty, then pickup
     * address from Shipment object will be used.
     */
    address?: ShipmentManagementAPI.PickupAddress;
  }
}

export interface CreateCommandGetStatusResponse {
  /**
   * Generated Carrier Pickup ID. Available only, if operation finished with SUCCESS.
   */
  carrierPickupId?: string;

  /**
   * Command UUID
   */
  commandId?: string;

  /**
   * List of errors. Available only, if operation finished with ERROR.
   */
  errors?: Array<ShipmentsCreateCommandsAPI.Error400>;

  /**
   * Generated internal pickup ID. Available only, if operation finished with
   * SUCCESS.
   */
  pickupId?: string;

  status?: 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
}

export interface CreateCommandRequestPickupParams {
  input: CreateCommandRequestPickupParams.Input;

  /**
   * Command UUID. If empty, then system generate new one.
   */
  commandId?: string;
}

export namespace CreateCommandRequestPickupParams {
  export interface Input {
    /**
     * Internal pickup proposal ID
     */
    pickupDateProposalId: string;

    shipmentIds: Array<string>;

    /**
     * Optional pickup address with optional drop-off point. If empty, then pickup
     * address from Shipment object will be used.
     */
    address?: ShipmentManagementAPI.PickupAddress;
  }
}

export declare namespace CreateCommands {
  export {
    type CreatePickupCommand as CreatePickupCommand,
    type CreateCommandGetStatusResponse as CreateCommandGetStatusResponse,
    type CreateCommandRequestPickupParams as CreateCommandRequestPickupParams,
  };
}
