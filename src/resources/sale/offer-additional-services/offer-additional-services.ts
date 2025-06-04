// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BidAPI from '../../bidding/offers/bid';
import * as GroupsAPI from './groups/groups';
import {
  AdditionalServicesGroup,
  GroupCreateParams,
  GroupListParams,
  GroupListResponse,
  GroupUpdateParams,
  Groups,
} from './groups/groups';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class OfferAdditionalServices extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Use this resource to get additional services definitions, grouped by additional
   * services categories, available on given marketplace. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-liste-dostepnych-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-a-list-of-available-additional-services" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.offerAdditionalServices.getCategories();
   * ```
   */
  getCategories(options?: RequestOptions): APIPromise<OfferAdditionalServiceGetCategoriesResponse> {
    return this._client.get('/sale/offer-additional-services/categories', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface OfferAdditionalServiceGetCategoriesResponse {
  categories?: Array<OfferAdditionalServiceGetCategoriesResponse.Category>;
}

export namespace OfferAdditionalServiceGetCategoriesResponse {
  export interface Category {
    definitions?: Array<Category.Definition>;

    /**
     * Name of the additional services category.
     */
    name?: string;
  }

  export namespace Category {
    export interface Definition {
      /**
       * Id of additional service definition.
       */
      id?: string;

      availableConstraints?: Array<Definition.AvailableConstraint> | null;

      description?: Definition.Description;

      /**
       * The price data.
       */
      maxPrice?: BidAPI.Price;

      /**
       * Name of additional service definition, that should be shown to the customer.
       */
      name?: string;

      updatedAt?: string | null;
    }

    export namespace Definition {
      export interface AvailableConstraint {
        /**
         * All delivery methods ids, which are available for given additional service.
         */
        availableDeliveryMethods?: Array<string> | null;

        /**
         * One of the type COUNTRY_SAME_QUANTITY or COUNTRY_DELIVERY_SAME_QUANTITY
         */
        type?: string | null;
      }

      export interface Description {
        /**
         * Default description of special additional service, provided by Allegro.
         */
        default?: string | null;

        /**
         * Determines whether the description of additional service can be set by the
         * seller, or it's provided by Allegro and cannot be changed.
         */
        editable?: boolean;

        /**
         * Hint for the seller for better description for customers.
         */
        hint?: string | null;
      }
    }
  }
}

OfferAdditionalServices.Groups = Groups;

export declare namespace OfferAdditionalServices {
  export { type OfferAdditionalServiceGetCategoriesResponse as OfferAdditionalServiceGetCategoriesResponse };

  export {
    Groups as Groups,
    type AdditionalServicesGroup as AdditionalServicesGroup,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };
}
