// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ShipmentManagementAPI from './shipment-management';
import * as PickupsAPI from './pickups/pickups';
import { Pickups } from './pickups/pickups';
import * as ShipmentsAPI from './shipments/shipments';
import {
  Address,
  CashOnDelivery as ShipmentsAPICashOnDelivery,
  DimensionValue,
  Insurance as ShipmentsAPIInsurance,
  ReceiverAddress,
  SenderAddress,
  ShipmentPickupAddress,
  ShipmentRetrieveResponse,
  Shipments,
  WeightValue,
} from './shipments/shipments';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ShipmentManagement extends APIResource {
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
  pickups: PickupsAPI.Pickups = new PickupsAPI.Pickups(this._client);

  /**
   * Use this resource to get label for created shipment. <br/>Returned content type
   * depends on created shipment. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-utworzyc-etykiete-na-paczke" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-create-a-label-for-shipment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.createLabel({
   *     shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
   *   });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  createLabel(body: ShipmentManagementCreateLabelParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/shipment-management/label', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: 'application/octet-stream' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Protocol availability depends on Carrier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-protokol-nadania-przesylek" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-shipment-protocol" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.createProtocol({
   *     shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
   *   });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  createProtocol(
    body: ShipmentManagementCreateProtocolParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.post('/shipment-management/protocol', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: 'application/octet-stream' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Use this resource to get delivery services available for user. It returns
   * services provided by Allegro and contracts with carriers owned by user and
   * configured by GUI. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-liste-uslug-dostawy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-a-list-of-delivery-services" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.listDeliveryServices();
   * ```
   */
  listDeliveryServices(options?: RequestOptions): APIPromise<ShipmentManagementListDeliveryServicesResponse> {
    return this._client.get('/shipment-management/delivery-services', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get parcels pickup date proposals. Pickup takes place, when
   * courier arrives to take parcels for shipment. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-sprawdzic-proponowana-date-odbioru-paczek-przez-kuriera" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-check-pickup-date-proposals" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.shipmentManagement.listPickupProposals({
   *     shipmentIds: ['ba88f0fb-acf3-438a-877e-580da50c0874'],
   *   });
   * ```
   */
  listPickupProposals(
    body: ShipmentManagementListPickupProposalsParams,
    options?: RequestOptions,
  ): APIPromise<ShipmentManagementListPickupProposalsResponse> {
    return this._client.post('/shipment-management/pickup-proposals', {
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

/**
 * Optional pickup address with optional drop-off point. If empty, then pickup
 * address from Shipment object will be used.
 */
export interface PickupAddress extends ShipmentsAPI.Address {
  /**
   * Drop off point id. You can get it directly from courier service.
   */
  point?: string;
}

/**
 * List of all available delivery services for merchant. List will be unique for
 * each merchant.
 */
export interface ShipmentManagementListDeliveryServicesResponse {
  services?: Array<ShipmentManagementListDeliveryServicesResponse.Service>;
}

export namespace ShipmentManagementListDeliveryServicesResponse {
  /**
   * Primary object for Ship with Allegro. It's strongly related to delivery-method
   * selected by buyer in purchase process and represent how shipment will be
   * delivered. Delivery services contains set of features like cash on delivery
   * support, additional parcel protection, additional services used to shipment
   * creation.
   */
  export interface Service {
    id?: Service.ID;

    additionalProperties?: Array<Service.AdditionalProperty>;

    additionalServices?: Array<Service.AdditionalService>;

    carrierId?: string;

    /**
     * Definition of cash on delivery specification for method. If null, then COD is
     * not supported.
     */
    cashOnDelivery?: Service.CashOnDelivery;

    /**
     * A map of service-specific features. List of key will be builded per services.
     */
    features?: Record<string, string>;

    insurance?: Service.Insurance;

    /**
     * List of marketplaces supported by service
     */
    marketplaces?: Array<string>;

    /**
     * Name of delivery service. <br/> For Allegro Standard method, name of service
     * will be exactly same and occurs only once: eg. 'Allegro Courier DPD'. <br/> For
     * merchant's controlled method, name is concatenation of method name and
     * credential name: eg. 'Courier DPD (My agreement)'.
     */
    name?: string;

    /**
     * Define delivery method type. ALLEGRO - Allegro Standard. Client - Merchant
     * carrier agreement
     */
    owner?: 'ALLEGRO' | 'CLIENT';

    /**
     * List of supported package types
     */
    packageTypes?: Array<'DOX' | 'PACKAGE' | 'PALLET' | 'OTHER'>;
  }

  export namespace Service {
    export interface ID {
      /**
       * ID of merchant agreement, registered in WZA. For Allegro Standard methods, this
       * field is null.
       */
      credentialsId?: string;

      /**
       * Id of delivery method, chosen by buyer in order.
       */
      deliveryMethodId?: string;
    }

    export interface AdditionalProperty {
      /**
       * ID of the additional property.
       */
      id: string;

      /**
       * Translated description of the additional property.
       */
      description: string;

      /**
       * Translated name of the additional property: 'Sending code' | 'Kod nadania'.
       */
      name: string;

      /**
       * If 'false', the additional property value can be set in request, 'true' means
       * that it is set by carrier and will be available only in
       * /shipment-management/shipments/{shipmentId} response.
       */
      readOnly: boolean;

      /**
       * Defines if the additional property is mandatory or optional.
       */
      required: boolean;
    }

    export interface AdditionalService {
      /**
       * ID of additional service.
       */
      id: string;

      /**
       * Translated name of service: 'Non-standard parcel' | 'Niestandardowa przesyłka'.
       */
      name: string;

      /**
       * Optional description of service.
       */
      description?: string;
    }

    /**
     * Definition of cash on delivery specification for method. If null, then COD is
     * not supported.
     */
    export interface CashOnDelivery {
      /**
       * Supported currency: 'PLN' | 'CZK
       */
      currency?: string;

      /**
       * Defined that COD required IBAN for process shipment. If true, then request of
       * shipment creation without IBAN will be rejected.
       */
      forceRequireIban?: boolean;

      /**
       * Maximum value
       */
      limit?: number;

      /**
       * Type of payment: Money transfer to merchant bank account or internal wallet
       * payout
       */
      paymentType?: 'MONEY_TRANSFER' | 'WALLET_TRANSFER';
    }

    export interface Insurance {
      /**
       * ISO 4217 currency code. Currency code depends on marketplace, e.g. PLN for
       * allegro-pl, CZK for allegro-cz.
       */
      currency?: string;

      /**
       * Maximum value
       */
      limit?: number;
    }
  }
}

export type ShipmentManagementListPickupProposalsResponse =
  Array<ShipmentManagementListPickupProposalsResponse.ShipmentManagementListPickupProposalsResponseItem>;

export namespace ShipmentManagementListPickupProposalsResponse {
  export interface ShipmentManagementListPickupProposalsResponseItem {
    /**
     * Optional pickup address with optional drop-off point. If empty, then pickup
     * address from Shipment object will be used.
     */
    address?: ShipmentManagementAPI.PickupAddress;

    proposals?: Array<ShipmentManagementListPickupProposalsResponseItem.Proposal>;
  }

  export namespace ShipmentManagementListPickupProposalsResponseItem {
    export interface Proposal {
      proposalItems?: Array<Proposal.ProposalItem>;

      shipmentId?: string;
    }

    export namespace Proposal {
      export interface ProposalItem {
        /**
         * Internal pickup proposal ID
         */
        id: string;

        /**
         * Human readable name of pickup proposal
         */
        name: string;

        /**
         * Additional information for pickup proposal
         */
        description?: string;
      }
    }
  }
}

export interface ShipmentManagementCreateLabelParams {
  shipmentIds: Array<string>;

  /**
   * Put additional cut lines. Only for PDF file with A4 size.
   */
  cutLine?: boolean;

  /**
   * Label page format. Only for PDF file.
   */
  pageSize?: 'A4' | 'A6';
}

export interface ShipmentManagementCreateProtocolParams {
  shipmentIds: Array<string>;
}

export interface ShipmentManagementListPickupProposalsParams {
  shipmentIds: Array<string>;

  /**
   * Optional pickup address with optional drop-off point. If empty, then pickup
   * address from Shipment object will be used.
   */
  address?: PickupAddress;

  /**
   * Date when shipments will be ready.
   */
  readyDate?: string;
}

ShipmentManagement.Shipments = Shipments;
ShipmentManagement.Pickups = Pickups;

export declare namespace ShipmentManagement {
  export {
    type PickupAddress as PickupAddress,
    type ShipmentManagementListDeliveryServicesResponse as ShipmentManagementListDeliveryServicesResponse,
    type ShipmentManagementListPickupProposalsResponse as ShipmentManagementListPickupProposalsResponse,
    type ShipmentManagementCreateLabelParams as ShipmentManagementCreateLabelParams,
    type ShipmentManagementCreateProtocolParams as ShipmentManagementCreateProtocolParams,
    type ShipmentManagementListPickupProposalsParams as ShipmentManagementListPickupProposalsParams,
  };

  export {
    Shipments as Shipments,
    type Address as Address,
    type ShipmentsAPICashOnDelivery as CashOnDelivery,
    type DimensionValue as DimensionValue,
    type ShipmentsAPIInsurance as Insurance,
    type ReceiverAddress as ReceiverAddress,
    type SenderAddress as SenderAddress,
    type ShipmentPickupAddress as ShipmentPickupAddress,
    type WeightValue as WeightValue,
    type ShipmentRetrieveResponse as ShipmentRetrieveResponse,
  };

  export { Pickups as Pickups };
}
