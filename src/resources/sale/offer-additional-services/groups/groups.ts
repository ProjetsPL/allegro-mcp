// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SizeTablesAPI from '../../size-tables';
import * as BidAPI from '../../../bidding/offers/bid';
import * as TranslationsAPI from './translations';
import {
  AdditionalServiceTranslation,
  AdditionalServicesGroupTranslationWrapper,
  TranslationDeleteParams,
  TranslationListParams,
  TranslationListResponse,
  TranslationUpdateParams,
  TranslationUpdateResponse,
  Translations,
} from './translations';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Groups extends APIResource {
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);

  /**
   * Use this resource to create a group of additional services. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-nowa-grupe-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-a-new-additional-service-group" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const additionalServicesGroup =
   *   await client.sale.offerAdditionalServices.groups.create({
   *     additionalServices: [
   *       {
   *         configurations: [{}],
   *         definition: { id: 'GIFT_WRAP' },
   *         description: 'description',
   *       },
   *     ],
   *     language: 'pl-PL',
   *     name: 'Gift wrap only',
   *   });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<AdditionalServicesGroup> {
    return this._client.post('/sale/offer-additional-services/groups', {
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
   * Use this resource to get additional services group for a given ID. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-wybrana-grupe-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-a-group-of-additional-services-for-a-given-id" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const additionalServicesGroup =
   *   await client.sale.offerAdditionalServices.groups.retrieve(
   *     'groupId',
   *   );
   * ```
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<AdditionalServicesGroup> {
    return this._client.get(path`/sale/offer-additional-services/groups/${groupID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify existing additional service group. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-zaktualizowac-grupe-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-additional-service-group" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const additionalServicesGroup =
   *   await client.sale.offerAdditionalServices.groups.update(
   *     'groupId',
   *     {
   *       additionalServices: [
   *         {
   *           configurations: [{}],
   *           definition: { id: 'GIFT_WRAP' },
   *           description: 'description',
   *         },
   *       ],
   *       language: 'pl-PL',
   *       name: 'Gift wrap only',
   *     },
   *   );
   * ```
   */
  update(
    groupID: string,
    body: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdditionalServicesGroup> {
    return this._client.put(path`/sale/offer-additional-services/groups/${groupID}`, {
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
   * Use this resource to retrieve a list of groups with additional services
   * available to a given user which you may assign to offers. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-liste-grup-uslug-dodatkowych-na-koncie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-a-list-of-additional-services-groups-for-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const groups =
   *   await client.sale.offerAdditionalServices.groups.list();
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/sale/offer-additional-services/groups', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface AdditionalServicesGroup {
  id?: string;

  additionalServices?: Array<AdditionalServicesGroup.AdditionalService>;

  createdAt?: string;

  /**
   * IETF language tag.
   */
  language?: string | null;

  /**
   * Name of the group provided by merchant, invisible for buyers.
   */
  name?: string;

  seller?: AdditionalServicesGroup.Seller;

  updatedAt?: string;
}

export namespace AdditionalServicesGroup {
  export interface AdditionalService {
    configurations?: Array<AdditionalService.Configuration>;

    definition?: AdditionalService.Definition;

    /**
     * This is a description provided by merchant while configuring additional service
     * group.
     */
    description?: string;
  }

  export namespace AdditionalService {
    export interface Configuration {
      constraintCriteria?: Configuration.ConstraintCriteria;

      /**
       * The price data.
       */
      price?: BidAPI.Price;
    }

    export namespace Configuration {
      export interface ConstraintCriteria {
        country?: string;

        /**
         * This is used by additional services that are realised in transport (e.g.
         * CARRY_IN), and this field exists together with COUNTRY_DELIVERY_SAME_QUANTITY
         * constraint type. It describes which delivery methods can realise particular
         * service.
         */
        deliveryMethods?: Array<SizeTablesAPI.JustID>;

        /**
         * Constraint type. COUNTRY_SAME_QUANTITY is used by additional services that are
         * realised before shipping (e.g. GIFT_WRAP), while COUNTRY_DELIVERY_SAME_QUANTITY
         * is for additional services that are realised in delivery (e.g. CARRY_IN).
         */
        type?: 'COUNTRY_SAME_QUANTITY' | 'COUNTRY_DELIVERY_SAME_QUANTITY';
      }
    }

    export interface Definition {
      /**
       * Id of an additional service definition.
       */
      id?: string;
    }
  }

  export interface Seller {
    id?: string;
  }
}

export interface GroupListResponse {
  additionalServicesGroups?: Array<AdditionalServicesGroup>;
}

export interface GroupCreateParams {
  additionalServices: Array<GroupCreateParams.AdditionalService>;

  /**
   * IETF language tag. Must be equal to main language for given marketplace: 'pl-PL'
   * on allegro.pl and 'cs-CZ' on allegro.cz while creating new group.<br/> Cannot
   * change the language of already created group while modifying existing group.
   */
  language: string;

  /**
   * Name of the group provided by merchant, invisible for buyers.
   */
  name: string;
}

export namespace GroupCreateParams {
  export interface AdditionalService {
    configurations: Array<AdditionalService.Configuration>;

    definition: AdditionalService.Definition;

    description: string;
  }

  export namespace AdditionalService {
    export interface Configuration {
      constraintCriteria?: Configuration.ConstraintCriteria;

      /**
       * The price data.
       */
      price?: BidAPI.Price;
    }

    export namespace Configuration {
      export interface ConstraintCriteria {
        country?: string;

        /**
         * This is used by additional services that are realised in transport (e.g.
         * CARRY_IN), and this field exists together with COUNTRY_DELIVERY_SAME_QUANTITY
         * constraint type. It describes which delivery methods can realise particular
         * service.
         */
        deliveryMethods?: Array<SizeTablesAPI.JustID>;

        /**
         * Constraint type. COUNTRY_SAME_QUANTITY is used by additional services that are
         * realised before shipping (e.g. GIFT_WRAP), while COUNTRY_DELIVERY_SAME_QUANTITY
         * is for additional services that are realised in delivery (e.g. CARRY_IN).
         */
        type?: 'COUNTRY_SAME_QUANTITY' | 'COUNTRY_DELIVERY_SAME_QUANTITY';
      }
    }

    export interface Definition {
      id: string;
    }
  }
}

export interface GroupUpdateParams {
  additionalServices: Array<GroupUpdateParams.AdditionalService>;

  /**
   * IETF language tag. Must be equal to main language for given marketplace: 'pl-PL'
   * on allegro.pl and 'cs-CZ' on allegro.cz while creating new group.<br/> Cannot
   * change the language of already created group while modifying existing group.
   */
  language: string;

  /**
   * Name of the group provided by merchant, invisible for buyers.
   */
  name: string;
}

export namespace GroupUpdateParams {
  export interface AdditionalService {
    configurations: Array<AdditionalService.Configuration>;

    definition: AdditionalService.Definition;

    description: string;
  }

  export namespace AdditionalService {
    export interface Configuration {
      constraintCriteria?: Configuration.ConstraintCriteria;

      /**
       * The price data.
       */
      price?: BidAPI.Price;
    }

    export namespace Configuration {
      export interface ConstraintCriteria {
        country?: string;

        /**
         * This is used by additional services that are realised in transport (e.g.
         * CARRY_IN), and this field exists together with COUNTRY_DELIVERY_SAME_QUANTITY
         * constraint type. It describes which delivery methods can realise particular
         * service.
         */
        deliveryMethods?: Array<SizeTablesAPI.JustID>;

        /**
         * Constraint type. COUNTRY_SAME_QUANTITY is used by additional services that are
         * realised before shipping (e.g. GIFT_WRAP), while COUNTRY_DELIVERY_SAME_QUANTITY
         * is for additional services that are realised in delivery (e.g. CARRY_IN).
         */
        type?: 'COUNTRY_SAME_QUANTITY' | 'COUNTRY_DELIVERY_SAME_QUANTITY';
      }
    }

    export interface Definition {
      id: string;
    }
  }
}

export interface GroupListParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

Groups.Translations = Translations;

export declare namespace Groups {
  export {
    type AdditionalServicesGroup as AdditionalServicesGroup,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export {
    Translations as Translations,
    type AdditionalServiceTranslation as AdditionalServiceTranslation,
    type AdditionalServicesGroupTranslationWrapper as AdditionalServicesGroupTranslationWrapper,
    type TranslationUpdateResponse as TranslationUpdateResponse,
    type TranslationListResponse as TranslationListResponse,
    type TranslationUpdateParams as TranslationUpdateParams,
    type TranslationListParams as TranslationListParams,
    type TranslationDeleteParams as TranslationDeleteParams,
  };
}
