// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * Use this resource to create new active removal preference. From the moment the
   * preference is set, it becomes the active one, and all new system removal orders
   * will be associated with this preference. Removal preference is associated with
   * system removal order at the moment of removal order is created. It means there
   * can be not yet fulfilled removal orders associated with previously set removal
   * preference.
   *
   * @example
   * ```ts
   * const fulfillmentRemovalPreference =
   *   await client.fulfillment.removal.preferences.create({
   *     operation: 'WITHDRAWAL',
   *   });
   * ```
   */
  create(body: PreferenceCreateParams, options?: RequestOptions): APIPromise<FulfillmentRemovalPreference> {
    return this._client.put('/fulfillment/removal/preferences', {
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
   * Use this resource to read your current removal preference. Removal preference is
   * associated with system removal order at the moment of removal order is created.
   * It means there can be not yet fulfilled removal orders associated with
   * previously set removal preference.
   *
   * @example
   * ```ts
   * const fulfillmentRemovalPreference =
   *   await client.fulfillment.removal.preferences.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<FulfillmentRemovalPreference> {
    return this._client.get('/fulfillment/removal/preferences', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Represents seller preference how to handle goods that should be removed from 1F
 * warehouse.
 */
export interface FulfillmentRemovalPreference {
  /**
   * Preference what kind of operation to execute on undesirable items
   * WITHDRAWAL/DISPOSAL (required).
   */
  operation: 'WITHDRAWAL' | 'DISPOSAL';

  /**
   * Represents information about address passed for withdrawal purpose.
   */
  address?: FulfillmentRemovalPreference.Address;
}

export namespace FulfillmentRemovalPreference {
  /**
   * Represents information about address passed for withdrawal purpose.
   */
  export interface Address {
    /**
     * The name of the city or town (required).
     */
    city: string;

    /**
     * Delivery recipient name (required).
     */
    company: string;

    /**
     * The country code where the address is located (required).
     */
    countryCode: string;

    /**
     * Represents international phone number with country code.
     */
    phone: Address.Phone;

    /**
     * The code used for postal delivery purposes (required).
     */
    postalCode: string;

    /**
     * The name of the street, building number and so on, where the building is located
     * (required).
     */
    street: string;

    /**
     * Additional info which can be passed on courier label but only for parcels with
     * larger dimensions sent not by WzA (SwA).
     */
    additionalInfo?: string;
  }

  export namespace Address {
    /**
     * Represents international phone number with country code.
     */
    export interface Phone {
      /**
       * Country code without neither + nor 0 prefix.
       */
      countryCode: string;

      /**
       * Local phone number without prefix.
       */
      number: string;
    }
  }
}

export interface PreferenceCreateParams {
  /**
   * Preference what kind of operation to execute on undesirable items
   * WITHDRAWAL/DISPOSAL (required).
   */
  operation: 'WITHDRAWAL' | 'DISPOSAL';

  /**
   * Represents information about address passed for withdrawal purpose.
   */
  address?: PreferenceCreateParams.Address;
}

export namespace PreferenceCreateParams {
  /**
   * Represents information about address passed for withdrawal purpose.
   */
  export interface Address {
    /**
     * The name of the city or town (required).
     */
    city: string;

    /**
     * Delivery recipient name (required).
     */
    company: string;

    /**
     * The country code where the address is located (required).
     */
    countryCode: string;

    /**
     * Represents international phone number with country code.
     */
    phone: Address.Phone;

    /**
     * The code used for postal delivery purposes (required).
     */
    postalCode: string;

    /**
     * The name of the street, building number and so on, where the building is located
     * (required).
     */
    street: string;

    /**
     * Additional info which can be passed on courier label but only for parcels with
     * larger dimensions sent not by WzA (SwA).
     */
    additionalInfo?: string;
  }

  export namespace Address {
    /**
     * Represents international phone number with country code.
     */
    export interface Phone {
      /**
       * Country code without neither + nor 0 prefix.
       */
      countryCode: string;

      /**
       * Local phone number without prefix.
       */
      number: string;
    }
  }
}

export declare namespace Preferences {
  export {
    type FulfillmentRemovalPreference as FulfillmentRemovalPreference,
    type PreferenceCreateParams as PreferenceCreateParams,
  };
}
