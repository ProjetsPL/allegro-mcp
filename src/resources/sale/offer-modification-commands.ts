// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OfferModificationCommandsAPI from './offer-modification-commands';
import * as OfferPublicationCommandsAPI from './offer-publication-commands';
import * as ProductOffersAPI from './product-offers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferModificationCommands extends APIResource {
  /**
   * Use this resource to find out how many offers were edited within one
   * {commandId}. You will receive a summary with a number of successfully edited
   * offers. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-wielu-ofert-jednoczesnie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-many-offers" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerModificationCommands.retrieve(
   *     'commandId',
   *   );
   * ```
   */
  retrieve(
    commandID: string,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.get(path`/sale/offer-modification-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify multiple offers at once. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-wielu-ofert-jednoczesnie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-many-offers" target="_blank">EN</a>.
   * This resource is rate limited to 250 000 offer changes per hour or 9000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerModificationCommands.update(
   *     'commandId',
   *   );
   * ```
   */
  update(
    commandID: string,
    body: OfferModificationCommandUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.put(path`/sale/offer-modification-commands/${commandID}`, {
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
   * Use this resource to retrieve a detailed summary of changes introduced within
   * one {commandId} (defaults: limit = 100, offset = 0). Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-wielu-ofert-jednoczesnie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-many-offers" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const taskReport =
   *   await client.sale.offerModificationCommands.tasks(
   *     'commandId',
   *   );
   * ```
   */
  tasks(
    commandID: string,
    query: OfferModificationCommandTasksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.TaskReport> {
    return this._client.get(path`/sale/offer-modification-commands/${commandID}/tasks`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface ShippingRates {
  /**
   * Id of shipping rates
   */
  id?: string;
}

export interface OfferModificationCommandUpdateParams {
  /**
   * Contains fields to change
   */
  modification?: OfferModificationCommandUpdateParams.Modification;

  /**
   * List of offer criteria
   */
  offerCriteria?: Array<OfferPublicationCommandsAPI.OfferCriterium>;
}

export namespace OfferModificationCommandUpdateParams {
  /**
   * Contains fields to change
   */
  export interface Modification {
    additionalServicesGroup?: Modification.AdditionalServicesGroup;

    /**
     * Contains delivery details to change.
     */
    delivery?: Modification.Delivery;

    /**
     * Allows you to assign/unassign discounts (rebates) to/from offers.
     */
    discounts?: Modification.Discounts;

    /**
     * for offer with a delivery method it is a parcel dispatch location. For offers
     * with personal pick-up it is a pick-up location, additionally we recommend to use
     * points of service
     * (<a href="../../documentation/#tag/Points-of-service" target="_blank">https://developer.allegro.pl/documentation/#tag/Points-of-service</a>)
     */
    location?: ProductOffersAPI.Location;

    /**
     * Allows you to declare whether the first product in the offer was marketed before
     * the GPSR obligation.
     */
    marketedBeforeGPSRObligation?: boolean | null;

    payments?: Modification.Payments;

    /**
     * Allows you to change duration of the offers. You can include only property in a
     * request "duration" or "durationUnlimited".
     */
    publication?: Modification.Publication;

    /**
     * Allows you to assign/unassign responsible persons to/from offers.
     */
    responsiblePerson?: Modification.ResponsiblePerson;

    /**
     * Allows you to assign/unassign responsible producers to/from offers.
     */
    responsibleProducer?: Modification.ResponsibleProducer;

    /**
     * Allows you to set safety information in offers.
     */
    safetyInformation?: Modification.SafetyInformation;

    sizeTable?: ProductOffersAPI.SizeTable;
  }

  export namespace Modification {
    export interface AdditionalServicesGroup {
      /**
       * Id of additional service group
       */
      id?: string;
    }

    /**
     * Contains delivery details to change.
     */
    export interface Delivery {
      /**
       * Handling time, ISO 8601 duration format. PT0S for immediately.
       */
      handlingTime?:
        | 'PT0S'
        | 'PT24H'
        | 'PT48H'
        | 'PT72H'
        | 'PT96H'
        | 'PT120H'
        | 'PT168H'
        | 'PT240H'
        | 'PT336H'
        | 'PT504H'
        | 'PT720H'
        | 'PT1440H'
        | 'P2D'
        | 'P3D'
        | 'P4D'
        | 'P5D'
        | 'P7D'
        | 'P10D'
        | 'P14D'
        | 'P21D'
        | 'P30D'
        | 'P60D';

      shippingRates?: OfferModificationCommandsAPI.ShippingRates;
    }

    /**
     * Allows you to assign/unassign discounts (rebates) to/from offers.
     */
    export interface Discounts {
      wholesalePriceList?: Discounts.WholesalePriceList;
    }

    export namespace Discounts {
      export interface WholesalePriceList {
        /**
         * Promotion id of a wholesale price list to assign to the offer or `null` to
         * unassign wholesale price list from the offer.
         */
        id?: string;
      }
    }

    export interface Payments {
      /**
       * Invoice type: VAT, VAT_MARGIN, WITHOUT_VAT, NO_INVOICE
       */
      invoice?: 'VAT' | 'VAT_MARGIN' | 'WITHOUT_VAT' | 'NO_INVOICE';

      /**
       * VAT tax rate.
       */
      tax?: Payments.Tax;
    }

    export namespace Payments {
      /**
       * VAT tax rate.
       */
      export interface Tax {
        /**
         * The buy now tax rate, Format 0.00. The tax is linked to the default country that
         * corresponds to the base marketplace of this offer.
         */
        percentage?: string;
      }
    }

    /**
     * Allows you to change duration of the offers. You can include only property in a
     * request "duration" or "durationUnlimited".
     */
    export interface Publication {
      /**
       * Offer duration time provided in
       * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
       */
      duration?:
        | 'PT72H'
        | 'PT120H'
        | 'PT168H'
        | 'PT240H'
        | 'PT480H'
        | 'PT720H'
        | 'P3D'
        | 'P5D'
        | 'P7D'
        | 'P10D'
        | 'P20D'
        | 'P30D';

      /**
       * Unlimited duration time.
       */
      durationUnlimited?: boolean;
    }

    /**
     * Allows you to assign/unassign responsible persons to/from offers.
     */
    export interface ResponsiblePerson {
      /**
       * The ID of a responsible person configured using the
       * <a href="#tag/Responsible-persons">Responsible persons API</a>.
       *
       * _Note: if the offer contains multiple products, the responsible person will only
       * be changed for the first product._
       */
      id?: string;
    }

    /**
     * Allows you to assign/unassign responsible producers to/from offers.
     */
    export interface ResponsibleProducer {
      /**
       * The ID of a responsible producer configured using the
       * <a href="#tag/Responsible-producers">Responsible Producers API</a>.
       *
       * _Note: if the offer contains multiple products, the responsible producer will
       * only be changed for the first product._
       */
      id?: string;
    }

    /**
     * Allows you to set safety information in offers.
     */
    export interface SafetyInformation {
      /**
       * _Note: if the offer contains multiple products, the safety information will only
       * be changed for the first product._
       */
      type: string;
    }
  }
}

export interface OfferModificationCommandTasksParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace OfferModificationCommands {
  export {
    type ShippingRates as ShippingRates,
    type OfferModificationCommandUpdateParams as OfferModificationCommandUpdateParams,
    type OfferModificationCommandTasksParams as OfferModificationCommandTasksParams,
  };
}
