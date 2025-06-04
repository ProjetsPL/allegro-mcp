// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BundlesAPI from './bundles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Bundles extends APIResource {
  /**
   * You can create
   * <a href="https://help.allegro.com/sell/en/a/how-to-create-offer-bundles-rj9eAL2XnhK?marketplaceId=allegro-pl" target="_blank">offer
   * bundle</a> using this endpoint. Bundle has to contain at least two offers and at
   * least one of them has to be set as an entry point. Bundle will be shown on
   * offers' pages which are marked as entry points. You can also specify how many
   * units of each offer will be in bundle using `requiredQuantity` property.
   *
   * Additionally, discount can be specified for each marketplace separately. If you
   * do not want to set discount, set `discounts` property to `null` or empty array.
   * Also, you do not have to specify discount on all marketplaces. Fill marketplaces
   * in 'discounts' array accordingly to your needs.
   *
   * Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#utworz-zestaw-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#create-an-offer-bundle" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerBundle = await client.sale.bundles.create({
   *   offers: [
   *     {
   *       id: '123456789',
   *       requiredQuantity: 1,
   *       entryPoint: true,
   *     },
   *     {
   *       id: '987654321',
   *       requiredQuantity: 2,
   *       entryPoint: false,
   *     },
   *   ],
   *   discounts: [
   *     {
   *       marketplace: { id: 'allegro-pl' },
   *       amount: '10.15',
   *       currency: 'PLN',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: BundleCreateParams, options?: RequestOptions): APIPromise<OfferBundle> {
    return this._client.post('/sale/bundles', {
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
   * Use this resource to retrieve offer bundle by its unique identifier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-szczegoly-wybranego-zestawu" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-details-of-the-selected-offer-bundle" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerBundle = await client.sale.bundles.retrieve(
   *   'bundleId',
   * );
   * ```
   */
  retrieve(bundleID: string, options?: RequestOptions): APIPromise<OfferBundle> {
    return this._client.get(path`/sale/bundles/${bundleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * You can fetch page of seller's offer bundles using this endpoint.
   *
   * Paging: To move to next page, specify `page.id` parameter with value obtained in
   * response from previous request. Number of offer bundles on single page can be
   * specified using `limit` parameter.
   *
   * Filtering: Offer bundles can be filtered to bundles which contain offer
   * specified in `offer.id` parameter. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-liste-zestawow-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-offer-bundles-list" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const bundles = await client.sale.bundles.list();
   * ```
   */
  list(
    query: BundleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BundleListResponse> {
    return this._client.get('/sale/bundles', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete offer bundle by its unique identifier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#usun-wybrany-zestaw" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#remove-the-selected-offer-bundle" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.bundles.delete('bundleId');
   * ```
   */
  delete(bundleID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sale/bundles/${bundleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update discount per marketplaces associated with bundle
   * specified by its unique identifier. This will override currently set discounts
   * for all marketplaces, so the unchanged discounts also must be specified in
   * request. In case discount for marketplace is not specified in request it will be
   * deleted. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#zmien-rabat-przypisany-do-wybranego-zestawu" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#change-the-discount-for-the-selected-offer-bundle" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerBundle =
   *   await client.sale.bundles.updateDiscount('bundleId', {
   *     discounts: [
   *       {
   *         marketplace: { id: 'allegro-pl' },
   *         amount: '10.15',
   *         currency: 'PLN',
   *       },
   *     ],
   *   });
   * ```
   */
  updateDiscount(
    bundleID: string,
    body: BundleUpdateDiscountParams,
    options?: RequestOptions,
  ): APIPromise<OfferBundle> {
    return this._client.put(path`/sale/bundles/${bundleID}/discount`, {
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

export interface BundleDiscount {
  /**
   * Discount value.
   */
  amount: string;

  /**
   * Discount currency as a 3-letter code in accordance with
   * <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>
   * standard. Has to be in base currency of specified marketplace.
   */
  currency: string;

  marketplace: BundleMarketplace;
}

export interface BundleMarketplace {
  /**
   * Marketplace ID. Available marketplaces can be determined using
   * <a href="#operation/marketplacesGET">GET /marketplaces</a>.
   */
  id: string;
}

export interface BundledOffer {
  /**
   * Offer ID
   */
  id: string;

  /**
   * Set if bundle should be shown on offer page.
   */
  entryPoint: boolean;

  /**
   * How many units of this offer will be in bundle.
   */
  requiredQuantity: number;
}

export interface OfferBundle {
  /**
   * Bundle ID.
   */
  id: string;

  /**
   * When this bundle was created in
   * <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO_8601</a>
   * format.
   */
  createdAt: string;

  /**
   * Who created this bundle. It is set to: <ul> <li> `USER` for all bundles created
   * by seller on Allegro web page or via public API;</li> <li> `ALLEGRO` when bundle
   * was created
   * <a href="https://allegro.pl/dla-sprzedajacych/automatycznie-laczymy-wybrane-oferty-w-zestaw-K6VYllRgbs0" target="_blank">automatically</a>
   * by Allegro. </li> </ul>
   */
  createdBy: 'USER' | 'ALLEGRO';

  /**
   * Discounts on marketplaces.
   */
  discounts: Array<BundleDiscount> | null;

  /**
   * Offers included in bundle.
   */
  offers: Array<BundledOffer>;

  /**
   * Bundle status on each marketplace.
   */
  publication: OfferBundle.Publication;
}

export namespace OfferBundle {
  /**
   * Bundle status on each marketplace.
   */
  export interface Publication {
    marketplace: BundlesAPI.BundleMarketplace;

    /**
     * Bundle's status.
     */
    status: 'ACTIVE' | 'SUSPENDED';
  }
}

export interface BundleListResponse {
  /**
   * Seller's bundles.
   */
  bundles: Array<OfferBundle>;

  /**
   * Next page information.
   */
  nextPage?: BundleListResponse.NextPage;
}

export namespace BundleListResponse {
  /**
   * Next page information.
   */
  export interface NextPage {
    /**
     * Next page ID.
     */
    id: string;
  }
}

export interface BundleCreateParams {
  /**
   * Offers that will make up the bundle.
   */
  offers: Array<BundledOffer>;

  /**
   * Discounts on marketplaces. Can be null or empty if bundle shouldn't have
   * discount on any marketplace.
   */
  discounts?: Array<BundleDiscount> | null;
}

export interface BundleListParams {
  /**
   * Limit of bundles per page.
   */
  limit?: number;

  offer?: BundleListParams.Offer;

  page?: BundleListParams.Page;
}

export namespace BundleListParams {
  export interface Offer {
    /**
     * Filter bundles which contains offer.
     */
    id?: string;
  }

  export interface Page {
    /**
     * ID of page which will be retrieved.
     */
    id?: string;
  }
}

export interface BundleUpdateDiscountParams {
  /**
   * Discounts on marketplaces. Can be null or empty if bundle shouldn't have
   * discount on any marketplace.
   */
  discounts?: Array<BundleDiscount> | null;
}

export declare namespace Bundles {
  export {
    type BundleDiscount as BundleDiscount,
    type BundleMarketplace as BundleMarketplace,
    type BundledOffer as BundledOffer,
    type OfferBundle as OfferBundle,
    type BundleListResponse as BundleListResponse,
    type BundleCreateParams as BundleCreateParams,
    type BundleListParams as BundleListParams,
    type BundleUpdateDiscountParams as BundleUpdateDiscountParams,
  };
}
