// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ShipmentsAPI from './shipments';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CreateCommands extends APIResource {
  /**
   * Use this resource to create shipment for delivery. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-utworzyc-nowa-paczke" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-create-a-new-shipment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const createShipmentCommand =
   *   await client.shipmentManagement.shipments.createCommands.create({
   *     input: {
   *       deliveryMethodId: 'c3066682-97a3-42fe-9eb5-3beeccab840c',
   *       packages: [
   *         { ... },
   *       ],
   *       receiver: {
   *         city: 'Warszawa',
   *         countryCode: 'SE',
   *         email: 'email@mail.com',
   *         phone: '500600700',
   *         postalCode: '10-200',
   *         street: 'Główna 30',
   *       },
   *       sender: {
   *         city: 'Warszawa',
   *         countryCode: 'SE',
   *         email: 'email@mail.com',
   *         phone: '500600700',
   *         postalCode: '10-200',
   *         street: 'Główna 30',
   *       },
   *     },
   *   });
   * ```
   */
  create(body: CreateCommandCreateParams, options?: RequestOptions): APIPromise<CreateShipmentCommand> {
    return this._client.post('/shipment-management/shipments/create-commands', {
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
   * Use this resource to get shipment creation status. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-sprawdzic-status-utworzenia-paczki" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-check-the-creation-status-of-a-shipment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.shipments.createCommands.getStatus(
   *     '14e142cf-e8e0-48cc-bcf6-399b5fd90b32',
   *   );
   * ```
   */
  getStatus(commandID: string, options?: RequestOptions): APIPromise<CreateCommandGetStatusResponse> {
    return this._client.get(path`/shipment-management/shipments/create-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface CreateShipmentCommand {
  input: CreateShipmentCommand.Input;

  /**
   * Command UUID. If empty, then system generate new one.
   */
  commandId?: string;
}

export namespace CreateShipmentCommand {
  export interface Input {
    /**
     * Id of delivery method, chosen by buyer in order.
     */
    deliveryMethodId: string;

    packages: Array<Input.Package>;

    /**
     * Receiver address data with optional point ID.
     */
    receiver: ShipmentsAPI.ReceiverAddress;

    /**
     * Shipment owner data. This address will be provided on label and will be used to
     * operation return.
     */
    sender: ShipmentsAPI.SenderAddress;

    /**
     * Key-Value map defining non-standard, carrier specific features. List of the
     * supported properties is located as sub-resource in
     * /shipment-management/delivery-services.
     */
    additionalProperties?: Record<string, string>;

    /**
     * List of additional services.
     */
    additionalServices?: Array<string>;

    cashOnDelivery?: ShipmentsAPI.CashOnDelivery;

    /**
     * ID of merchant agreement, registered in WZA. Value should be read from
     * /shipment-management/delivery-services. For Allegro Standard methods, this field
     * should be null.
     */
    credentialsId?: string;

    insurance?: ShipmentsAPI.Insurance;

    /**
     * Label file format.
     */
    labelFormat?: 'PDF' | 'ZPL';

    /**
     * @deprecated Optional pickup address with optional drop-off point. If empty, then
     * sender object will be used. Parameter is deprecated and will be removed in the
     * future. Pickup address should be provided when requesting Pickup.
     */
    pickup?: ShipmentsAPI.ShipmentPickupAddress;

    /**
     * Shipment identifier in own system. Example: `Ordering number`.
     */
    referenceNumber?: string;
  }

  export namespace Input {
    export interface Package {
      height: ShipmentsAPI.DimensionValue;

      length: ShipmentsAPI.DimensionValue;

      /**
       * Available values: PACKAGE|DOX|PALLET|OTHER
       */
      type: string;

      weight: ShipmentsAPI.WeightValue;

      width: ShipmentsAPI.DimensionValue;

      /**
       * Additional information on the package label.
       */
      textOnLabel?: string;
    }
  }
}

export interface Error400 {
  /**
   * The error code. You can use this code when contacting us about any problems with
   * our systems.
   */
  code?: string;

  /**
   * For some cases, this field provides more details regarding the error. This field
   * can not be null.
   */
  details?: string;

  /**
   * A message directed to the developer of the program. This message give you some
   * more technical details on what exactly has happened.
   */
  message?: string;

  /**
   * This field will point to a specific field in object if the error is connected to
   * a problem with such specific field. This field can be empty
   */
  path?: string | null;

  /**
   * The message that can be presented directly to your user. It will not contain any
   * technical information. This message is translated based on the value of the
   * `Accept-Language` header. By default message in Polish is returned.
   */
  userMessage?: string;
}

export interface CreateCommandGetStatusResponse {
  /**
   * Command UUID
   */
  commandId?: string;

  /**
   * List of errors. Available only, if operation finished with ERROR.
   */
  errors?: Array<Error400>;

  /**
   * Generated shipment ID. Available only, if operation finished with SUCCESS.
   */
  shipmentId?: string;

  status?: 'IN_PROGRESS' | 'SUCCESS' | 'ERROR';
}

export interface CreateCommandCreateParams {
  input: CreateCommandCreateParams.Input;

  /**
   * Command UUID. If empty, then system generate new one.
   */
  commandId?: string;
}

export namespace CreateCommandCreateParams {
  export interface Input {
    /**
     * Id of delivery method, chosen by buyer in order.
     */
    deliveryMethodId: string;

    packages: Array<Input.Package>;

    /**
     * Receiver address data with optional point ID.
     */
    receiver: ShipmentsAPI.ReceiverAddress;

    /**
     * Shipment owner data. This address will be provided on label and will be used to
     * operation return.
     */
    sender: ShipmentsAPI.SenderAddress;

    /**
     * Key-Value map defining non-standard, carrier specific features. List of the
     * supported properties is located as sub-resource in
     * /shipment-management/delivery-services.
     */
    additionalProperties?: Record<string, string>;

    /**
     * List of additional services.
     */
    additionalServices?: Array<string>;

    cashOnDelivery?: ShipmentsAPI.CashOnDelivery;

    /**
     * ID of merchant agreement, registered in WZA. Value should be read from
     * /shipment-management/delivery-services. For Allegro Standard methods, this field
     * should be null.
     */
    credentialsId?: string;

    insurance?: ShipmentsAPI.Insurance;

    /**
     * Label file format.
     */
    labelFormat?: 'PDF' | 'ZPL';

    /**
     * @deprecated Optional pickup address with optional drop-off point. If empty, then
     * sender object will be used. Parameter is deprecated and will be removed in the
     * future. Pickup address should be provided when requesting Pickup.
     */
    pickup?: ShipmentsAPI.ShipmentPickupAddress;

    /**
     * Shipment identifier in own system. Example: `Ordering number`.
     */
    referenceNumber?: string;
  }

  export namespace Input {
    export interface Package {
      height: ShipmentsAPI.DimensionValue;

      length: ShipmentsAPI.DimensionValue;

      /**
       * Available values: PACKAGE|DOX|PALLET|OTHER
       */
      type: string;

      weight: ShipmentsAPI.WeightValue;

      width: ShipmentsAPI.DimensionValue;

      /**
       * Additional information on the package label.
       */
      textOnLabel?: string;
    }
  }
}

export declare namespace CreateCommands {
  export {
    type CreateShipmentCommand as CreateShipmentCommand,
    type Error400 as Error400,
    type CreateCommandGetStatusResponse as CreateCommandGetStatusResponse,
    type CreateCommandCreateParams as CreateCommandCreateParams,
  };
}
