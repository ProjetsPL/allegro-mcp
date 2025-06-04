// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferVariants extends APIResource {
  /**
   * Use this resource to create variant set.
   *
   * A valid variant set must consist of three required elements:
   *
   * - name:
   *   - it can't be blank and must not be longer than 75 characters
   * - parameters:
   *   - it should contain parameter identifiers used for offer grouping
   *   - parameter identifiers from the offers and special `color/pattern` value (for
   *     grouping via image) are permitted
   *   - it must contain at least one element (up to 2)
   * - offers:
   *   - it must contain at least 2 offers (500 at most)
   *   - `colorPattern` value must be set for every offer if `color/pattern`
   *     parameter is used
   *   - `colorPattern` value can't be blank and must not be longer than 50
   *     characters
   *   - `colorPattern` can take arbitrary string value like `red`,
   *     `b323592c-522f-4ec1-b9ea-3764538e0ac4` (UUID), etc.
   *   - offers having the same image should have identical `colorPattern` value
   *   - offers must have `publication.marketplaces.base` equal to `allegro-pl`
   *
   * Let's assume we have 4 offers:
   *
   * - offer with id 2 having an image of a red t-shirt and S as a value of parameter
   *   with id 21
   * - offer with id 3 having an image of a red t-shirt and M as a value of parameter
   *   with id 21
   * - offer with id 4 having an image of a blue t-shirt and S as a value of
   *   parameter with id 21
   * - offer with id 5 having an image of a blue t-shirt and M as a value of
   *   parameter with id 21
   *
   * You can build a variant set by grouping offers using combination of available
   * parameters - examples are available in <i>Request samples</i>.
   *
   * More general information about variant sets can be found
   * [here](https://allegro.pl/pomoc/faq/wielowariantowosc-jak-polaczyc-oferty-xGgaOByGgTb#dodatkowe-informacje).
   * Read more:
   * <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#utworz-oferte-wielowariantowa" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#create-a-multi-variant-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const variantSet = await client.sale.offerVariants.create({
   *   name: 't-shirt',
   *   offers: [{ id: '2' }, { id: '3' }],
   *   parameters: [{ id: '21' }],
   * });
   * ```
   */
  create(body: OfferVariantCreateParams, options?: RequestOptions): APIPromise<VariantSet> {
    return this._client.post('/sale/offer-variants', {
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
   * Use this resource to get variant set by set id. Read more:
   * <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#edytuj-oferte-wielowariantowa" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#update-a-multi-variant-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const variantSet = await client.sale.offerVariants.retrieve(
   *   'setId',
   * );
   * ```
   */
  retrieve(setID: string, options?: RequestOptions): APIPromise<VariantSet> {
    return this._client.get(path`/sale/offer-variants/${setID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to edit variant set.
   *
   * A valid variant set must consist of three required elements:
   *
   * - name:
   *   - it can't be blank and must not be longer than 75 characters
   * - parameters:
   *   - it should contain parameter identifiers used for offer grouping
   *   - parameter identifiers from the offers and special `color/pattern` value (for
   *     grouping via image) are permitted
   *   - it must contain at least one element (up to 2)
   * - offers:
   *   - it must contain at least 2 offers (500 at most)
   *   - `colorPattern` value must be set for every offer if `color/pattern`
   *     parameter is used
   *   - `colorPattern` value can't be blank and must not be longer than 50
   *     characters
   *   - `colorPattern` can take arbitrary string value like `red`,
   *     `b323592c-522f-4ec1-b9ea-3764538e0ac4` (UUID), etc.
   *   - offers having the same image should have identical `colorPattern` value
   *   - offers must have `publication.marketplaces.base` equal to `allegro-pl`
   *
   * Let's assume we have 4 offers:
   *
   * - offer with id 2 having an image of a red t-shirt and S as a value of parameter
   *   with id 21
   * - offer with id 3 having an image of a red t-shirt and M as a value of parameter
   *   with id 21
   * - offer with id 4 having an image of a blue t-shirt and S as a value of
   *   parameter with id 21
   * - offer with id 5 having an image of a blue t-shirt and M as a value of
   *   parameter with id 21
   *
   * You can build a variant set by grouping offers using combination of available
   * parameters - examples are available in <i>Request samples</i>.
   *
   * More general information about variant sets can be found
   * [here](https://allegro.pl/pomoc/faq/wielowariantowosc-jak-polaczyc-oferty-xGgaOByGgTb#dodatkowe-informacje).
   * Read more:
   * <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#edytuj-oferte-wielowariantowa" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#update-a-multi-variant-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const variantSet = await client.sale.offerVariants.update(
   *   'setId',
   *   {
   *     name: 't-shirt',
   *     offers: [{ id: '2' }, { id: '3' }],
   *     parameters: [{ id: '21' }],
   *   },
   * );
   * ```
   */
  update(setID: string, body: OfferVariantUpdateParams, options?: RequestOptions): APIPromise<VariantSet> {
    return this._client.put(path`/sale/offer-variants/${setID}`, {
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
   * Use this resource to get created variant sets. The returned variant sets are
   * ordered by name. Read more:
   * <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#pobierz-liste-ofert-wielowariantowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#retrieve-a-multi-variant-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerVariants =
   *   await client.sale.offerVariants.list();
   * ```
   */
  list(
    query: OfferVariantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferVariantListResponse> {
    return this._client.get('/sale/offer-variants', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete variant set by id. Offers included in variant set
   * will not be stopped or modified by this operation. Read more:
   * <a href="../../tutorials/jak-utworzyc-oferte-wielowariantowa-oA6ZYBg5XFo#usun-oferte-wielowariantowa" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-create-a-multi-variant-offer-nn9DOL3nXs2#remove-a-multi-variant-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offerVariants.delete('setId');
   * ```
   */
  delete(setID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sale/offer-variants/${setID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface VariantSet {
  name: string;

  offers: Array<VariantSet.Offer>;

  parameters: Array<VariantSet.Parameter>;

  id?: string;
}

export namespace VariantSet {
  export interface Offer {
    id: string;

    /**
     * Label that allows to group variants via image. All variants having the same
     * image should have identical identifier in this field.
     */
    colorPattern?: string;
  }

  export interface Parameter {
    id: string;
  }
}

export interface OfferVariantListResponse {
  /**
   * Total number of variant sets matching the query.
   */
  count?: number;

  offerVariants?: Array<OfferVariantListResponse.OfferVariant>;
}

export namespace OfferVariantListResponse {
  export interface OfferVariant {
    /**
     * Variant set id.
     */
    id?: string;

    /**
     * Variant set name.
     */
    name?: string;
  }
}

export interface OfferVariantCreateParams {
  name: string;

  offers: Array<OfferVariantCreateParams.Offer>;

  parameters: Array<OfferVariantCreateParams.Parameter>;
}

export namespace OfferVariantCreateParams {
  export interface Offer {
    id: string;

    /**
     * Label that allows to group variants via image. All variants having the same
     * image should have identical identifier in this field.
     */
    colorPattern?: string;
  }

  export interface Parameter {
    id: string;
  }
}

export interface OfferVariantUpdateParams {
  name: string;

  offers: Array<OfferVariantUpdateParams.Offer>;

  parameters: Array<OfferVariantUpdateParams.Parameter>;
}

export namespace OfferVariantUpdateParams {
  export interface Offer {
    id: string;

    /**
     * Label that allows to group variants via image. All variants having the same
     * image should have identical identifier in this field.
     */
    colorPattern?: string;
  }

  export interface Parameter {
    id: string;
  }
}

export interface OfferVariantListParams {
  /**
   * Maximum number of returned variant sets.
   */
  limit?: number;

  /**
   * Index of first returned variant set.
   */
  offset?: number;

  /**
   * Filter variant sets by name or offer id.
   */
  query?: string;
}

export declare namespace OfferVariants {
  export {
    type VariantSet as VariantSet,
    type OfferVariantListResponse as OfferVariantListResponse,
    type OfferVariantCreateParams as OfferVariantCreateParams,
    type OfferVariantUpdateParams as OfferVariantUpdateParams,
    type OfferVariantListParams as OfferVariantListParams,
  };
}
