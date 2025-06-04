// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Promotions extends APIResource {
  /**
   * This endpoint creates a new promotion. You can create promotions only if your
   * base marketplace is `allegro-pl`. Created promotions are visible only on the
   * `allegro-pl` marketplace. You can define the following types of promotions:
   *
   * 1. Large order discount Only company users will see and be eligible for this
   *    type of promotion. In order to create a large order discount, you also have
   *    to be a company user. Furthermore, you are allowed to have only one active
   *    order discount at a time. Define a promotion with a single benefit of type
   *    **LARGE_ORDER_DISCOUNT** and a single criterion of type **ALL_OFFERS**. The
   *    benefit specification should contain a list of order value based discount
   *    thresholds. Threshold's order value defines the minimum total value of an
   *    order for which the threshold is applicable (`lowerBound`). Threshold's
   *    discount defines the discount percentage applied when the threshold is
   *    applied. The percentage's fractional part must be equal to 0. Only the
   *    highest applicable threshold (if any) will be applied to the total value of
   *    the order. A threshold with a higher order value than another threshold in
   *    the order discount must also have a higher discount. Large order discount is
   *    assigned automatically to all seller's offers. Moreover, it will be assigned
   *    to all newly added seller's offers once activated. Please note that it may
   *    take some time to propagate this type of promotion to all of your offers.
   *    Read more:
   *    <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#dodaj-rabat" target="_blank">PL</a>
   *    /
   *    <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#add-large-order-discount" target="_blank">EN</a>.
   * 2. Wholesale price list Only company users will see and be eligible for this
   *    type of promotion. In order to create a wholesale price list, you also have
   *    to be a company user. Define a promotion with a single benefit of type
   *    **WHOLESALE_PRICE_LIST** and a single criterion of type
   *    **OFFERS_ASSIGNED_EXTERNALLY**. The benefit specification should contain a
   *    name (it will be visible to you only) and a list of quantity based discount
   *    thresholds. Threshold's quantity defines the minimum number of units of an
   *    offer for which the threshold is applicable (`lowerBound`). Threshold's
   *    discount defines the discount percentage applied when the threshold is
   *    applied. The percentage's fractional part must be equal to 0. Only the
   *    highest applicable threshold (if any) will be applied to the total price of
   *    units of the offer bought. A threshold with a higher quantity than another
   *    threshold in the price list must also have a higher discount. In order to
   *    assign offers to a wholesale price list, use `discounts` field in
   *    <a href="#operation/modificationCommandUsingPUT">batch offer
   *    modification</a>. Read more:
   *    <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#dodaj-cennik-hurtowy" target="_blank">PL</a>
   *    /
   *    <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#add-wholesale-price-list" target="_blank">EN</a>.
   * 3. Multipack In order to create a new multipack, you have to define a promotion
   *    with a single benefit of type **UNIT_PERCENTAGE_DISCOUNT** and a single
   *    criterion of type **CONTAINS_OFFERS**. The benefit specification should
   *    contain a configuration section with a percentage which indicates the
   *    specific discount for the discounted offer. This percentage should be an
   *    integer value greater than 15 for quantity 2, greater than 30 for quantity 3,
   *    greater than 40 for quantity 4, greater than 50 for quantity 5 and lower than
   *    or equal to 100. The specification should also contain a trigger section with
   *    a field forEachQuantity that defines the amount of items in the multipack
   *    which is necessary to trigger the benefit. Additionally, the discountedNumber
   *    field must be set to 1 by default as you can only discount one unit in a
   *    multipack. Finally, the offer criterion specifies the offer for which the
   *    multipack promotion will take effect. Read more:
   *    <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#dodaj-rabat-ilosciowy" target="_blank">PL</a>
   *    /
   *    <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#add-quantitative-discount" target="_blank">EN</a>
   * 4. Cross-offer multipack A cross-offer multipack is created in the same fashion
   *    as a standard multipack. The only difference is that you need to pass more
   *    than 1 offer in the offer criterion section. This group of offers is then
   *    considered as a pool from which users can pick and choose forEachQuantity
   *    offers and the cheapest of them gets a discount.
   *
   * @example
   * ```ts
   * const sellerRebate = await client.sale.loyalty.promotions.create({
   *   benefits: [
   *     {
   *       specification: { ... },
   *     },
   *   ],
   *   offerCriteria: [{ type: 'ALL_OFFERS' }],
   * });
   * ```
   */
  create(body: PromotionCreateParams, options?: RequestOptions): APIPromise<SellerRebate> {
    return this._client.post('/sale/loyalty/promotions', {
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
   * Use this resource to return the requested promotion. You need to use its unique
   * id. Read more about: Large order discount
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-informacje-o-rabacie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-information-about-large-order-discount" target="_blank">EN</a>,
   * Wholesale price list
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-informacje-o-cenniku" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-information-about-wholesale-price-list" target="_blank">EN</a>,
   * Multipack
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-informacje-o-rabacie-ilosciowym" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#information-about-an-quantitative-discount" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const sellerRebate =
   *   await client.sale.loyalty.promotions.retrieve(
   *     'promotionId',
   *   );
   * ```
   */
  retrieve(promotionID: string, options?: RequestOptions): APIPromise<SellerRebate> {
    return this._client.get(path`/sale/loyalty/promotions/${promotionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update a promotion by its unique id. It supports editing
   * bundle's discount, wholesale price lists and large order discounts. Read more
   * about: Large order discount
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#edytuj-progi-rabatowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#edit-discount-thresholds" target="_blank">EN</a>,
   * Wholesale price list
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#edytuj-cennik" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#edit-wholesale-price-list" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const sellerRebate = await client.sale.loyalty.promotions.update('promotionId', {
   *   benefits: [
   *     {
   *       specification: { ... },
   *     },
   *   ],
   *   offerCriteria: [{ type: 'ALL_OFFERS' }],
   * });
   * ```
   */
  update(
    promotionID: string,
    body: PromotionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SellerRebate> {
    return this._client.put(path`/sale/loyalty/promotions/${promotionID}`, {
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
   * Get a list of promotions defined by the authorized user and filtered by
   * promotion type.
   *
   * <p>Restrictions:</p> <p>Filtering by promotion type is required.</p>
   * <p>Sum of limit and offset must be equal to or lower than 50000. Limit must be equal to or lower than 5000.</p> <p>Example:</p> <p>offset = 49950 and limit = 50 will return promotions</p> <p>offset = 49950 and limit = 51 will return 422 http error</p> <p>offset = 0 and limit = 5000 will return promotions</p> <p>offset = 0 and limit = 5001 will return 422 http error</p>
   * <p>Read more about: Large order discount <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-dostepne-rabaty" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-large-order-discount" target="_blank">EN</a>, Wholesale price list <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-dostepne-cenniki" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-wholesale-price-lists" target="_blank">EN</a>, Multipack <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-dostepne-rabaty-ilosciowe" target="_blank">PL</a> / <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-promotional-sets" target="_blank">EN</a>.</p>
   *
   * @example
   * ```ts
   * const promotions =
   *   await client.sale.loyalty.promotions.list({
   *     promotionType: 'MULTIPACK',
   *   });
   * ```
   */
  list(query: PromotionListParams, options?: RequestOptions): APIPromise<PromotionListResponse> {
    return this._client.get('/sale/loyalty/promotions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to deactivate the requested promotion. You need to use its
   * unique id. Read more about: Large order discount
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#usun-rabat" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#remove-large-order-discount" target="_blank">EN</a>,
   * Wholesale price list
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#usun-cennik" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#remove-wholesale-price-list" target="_blank">EN</a>,
   * Multipack
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#usun-rabat-ilosciowy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#remove-an-quantitative-discount" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.loyalty.promotions.delete('promotionId');
   * ```
   */
  delete(promotionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sale/loyalty/promotions/${promotionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Benefit {
  /**
   * One of: LargeOrderDiscountBenefitSpecification,
   * WholesalePriceListBenefitSpecification, MultiPackBenefitSpecification
   */
  specification: Benefit.Specification;
}

export namespace Benefit {
  /**
   * One of: LargeOrderDiscountBenefitSpecification,
   * WholesalePriceListBenefitSpecification, MultiPackBenefitSpecification
   */
  export interface Specification {
    /**
     * Type of benefit.
     */
    type: string;
  }
}

export interface SellerCreateRebateRequest {
  /**
   * What kind of rebate will be given
   */
  benefits: Array<Benefit>;

  /**
   * What offers will be included
   */
  offerCriteria: Array<SellerRebateOfferCriterion>;
}

export interface SellerRebate {
  /**
   * Rebate identifier
   */
  id: string;

  /**
   * What kind of rebate will be given
   */
  benefits: Array<Benefit>;

  /**
   * What offers will be included
   */
  offerCriteria: Array<SellerRebateOfferCriterion>;

  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

  /**
   * when was this rebate created
   */
  createdAt?: string;
}

export interface SellerRebateOfferCriterion {
  /**
   * Criteria type: CONTAINS_OFFERS or OFFERS_ASSIGNED_EXTERNALLY
   */
  type: 'CONTAINS_OFFERS' | 'OFFERS_ASSIGNED_EXTERNALLY' | 'ALL_OFFERS';

  /**
   * Set of offers – only if `type` is `CONTAINS_OFFERS`
   */
  offers?: Array<SellerRebateOfferCriterion.Offer>;
}

export namespace SellerRebateOfferCriterion {
  export interface Offer {
    /**
     * Offer id
     */
    id: string;
  }
}

export interface PromotionListResponse {
  promotions: Array<SellerRebate>;

  totalCount: number;
}

export interface PromotionCreateParams {
  /**
   * What kind of rebate will be given
   */
  benefits: Array<Benefit>;

  /**
   * What offers will be included
   */
  offerCriteria: Array<SellerRebateOfferCriterion>;
}

export interface PromotionUpdateParams {
  /**
   * What kind of rebate will be given
   */
  benefits: Array<Benefit>;

  /**
   * What offers will be included
   */
  offerCriteria: Array<SellerRebateOfferCriterion>;
}

export interface PromotionListParams {
  /**
   * Filter by promotion type.
   */
  promotionType: 'MULTIPACK' | 'CROSS_MULTIPACK' | 'LARGE_ORDER_DISCOUNT' | 'WHOLESALE_PRICE_LIST';

  /**
   * Limit of promotions per page.
   */
  limit?: number;

  offer?: PromotionListParams.Offer;

  /**
   * Distance between the beginning of the document and the point from which
   * promotions are returned.
   */
  offset?: number;
}

export namespace PromotionListParams {
  export interface Offer {
    /**
     * Filter by offer id. No promotions with `OFFERS_ASSIGNED_EXTERNALLY` or
     * `ALL_OFFERS` criteria will be returned if this parameter is present.
     */
    id?: string;
  }
}

export declare namespace Promotions {
  export {
    type Benefit as Benefit,
    type SellerCreateRebateRequest as SellerCreateRebateRequest,
    type SellerRebate as SellerRebate,
    type SellerRebateOfferCriterion as SellerRebateOfferCriterion,
    type PromotionListResponse as PromotionListResponse,
    type PromotionCreateParams as PromotionCreateParams,
    type PromotionUpdateParams as PromotionUpdateParams,
    type PromotionListParams as PromotionListParams,
  };
}
