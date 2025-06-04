// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SaleAPI from '../sale';
import * as ProductsAPI from './products';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ChangeProposals extends APIResource {
  /**
   * Use this resource to propose changes in product. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-zglosic-blad-w-produkcie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-report-incorrect-data-in-a-product" target="_blank">EN</a>.
   * This resource is limited to 100 suggestions per day for a single user.
   *
   * @example
   * ```ts
   * const productChangeProposal =
   *   await client.sale.products.changeProposals.create(
   *     'productId',
   *     {
   *       category: {},
   *       images: [{}],
   *       language: 'language',
   *       name: 'iPhone 5s',
   *       parameters: [{ id: 'id' }],
   *     },
   *   );
   * ```
   */
  create(
    productID: string,
    params: ChangeProposalCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProductChangeProposal> {
    const { 'Accept-Language': acceptLanguage, ...body } = params;
    return this._client.post(path`/sale/products/${productID}/change-proposals`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage?.toString() != null ?
            { 'Accept-Language': acceptLanguage?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to retrieve all data of the particular product changes
   * proposal. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-zglosic-blad-w-produkcie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-report-incorrect-data-in-a-product" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const productChangeProposal =
   *   await client.sale.products.changeProposals.retrieve(
   *     'changeProposalId',
   *   );
   * ```
   */
  retrieve(
    changeProposalID: string,
    params: ChangeProposalRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductChangeProposal> {
    const { 'Accept-Language': acceptLanguage } = params ?? {};
    return this._client.get(path`/sale/products/change-proposals/${changeProposalID}`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage?.toString() != null ?
            { 'Accept-Language': acceptLanguage?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface ProductChangeProposal {
  /**
   * Product change proposal id
   */
  id?: string;

  /**
   * Name proposal status.
   */
  category?: ProductChangeProposal.Category;

  /**
   * List of proposed image change statuses.
   */
  images?: Array<ProductChangeProposal.Image>;

  /**
   * Language of provided suggestion data.
   */
  language?: string;

  /**
   * Name proposal status.
   */
  name?: ProductChangeProposal.Name;

  /**
   * Note about product changes proposal.
   */
  note?: string;

  /**
   * Receive an email notification after product changes proposal resolution.
   */
  notifyViaEmailAfterVerification?: boolean;

  /**
   * List of proposed product parameter change statuses.
   */
  parameters?: Array<ProductChangeProposal.Parameter>;
}

export namespace ProductChangeProposal {
  /**
   * Name proposal status.
   */
  export interface Category {
    /**
     * Current product category identifier.
     */
    current?: string;

    /**
     * Proposed product category identifier.
     */
    proposal?: string;

    /**
     * Verification message.
     */
    reason?: string;

    /**
     * Verification resolution type.
     */
    resolutionType?: 'UNRESOLVED' | 'ACCEPTED' | 'REJECTED';
  }

  /**
   * Image proposal.
   */
  export interface Image {
    /**
     * Current product image url.
     */
    current?: string;

    /**
     * Proposed product image url.
     */
    proposal?: string;

    /**
     * Verification message.
     */
    reason?: string;

    /**
     * Verification resolution type.
     */
    resolutionType?: 'UNRESOLVED' | 'ACCEPTED' | 'REJECTED';
  }

  /**
   * Name proposal status.
   */
  export interface Name {
    /**
     * Current product name.
     */
    current?: string;

    /**
     * Proposed product name.
     */
    proposal?: string;

    /**
     * Verification message.
     */
    reason?: string;

    /**
     * Verification resolution type.
     */
    resolutionType?: 'UNRESOLVED' | 'ACCEPTED' | 'REJECTED';
  }

  /**
   * Product parameter values proposal status.
   */
  export interface Parameter {
    /**
     * Parameter identifier.
     */
    id?: string;

    /**
     * List of proposed product parameter change statuses.
     */
    values?: Array<Parameter.Value>;
  }

  export namespace Parameter {
    /**
     * Parameter value proposal status.
     */
    export interface Value {
      /**
       * Current product parameter value.
       */
      current?: string;

      /**
       * Proposed product parameter value.
       */
      proposal?: string;

      /**
       * Verification message.
       */
      reason?: string;

      /**
       * Verification resolution type.
       */
      resolutionType?: 'UNRESOLVED' | 'ACCEPTED' | 'REJECTED';
    }
  }
}

export interface ChangeProposalCreateParams {
  /**
   * Body param: Product category
   */
  category: SaleAPI.ProductCategory;

  /**
   * Body param: List of product images. At least one image is required.
   */
  images: Array<ProductsAPI.ImageURL>;

  /**
   * Body param: Language of provided proposal data.
   */
  language: string;

  /**
   * Body param: Proposed product name.
   */
  name: string;

  /**
   * Body param: List of product parameters.
   */
  parameters: Array<SaleAPI.ProductParameter>;

  /**
   * Body param: Note about product changes proposal.
   */
  note?: string;

  /**
   * Body param: Receive an email notification after product changes proposal
   * resolution.
   */
  notifyViaEmailAfterVerification?: boolean;

  /**
   * Header param: Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export interface ChangeProposalRetrieveParams {
  /**
   * Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export declare namespace ChangeProposals {
  export {
    type ProductChangeProposal as ProductChangeProposal,
    type ChangeProposalCreateParams as ChangeProposalCreateParams,
    type ChangeProposalRetrieveParams as ChangeProposalRetrieveParams,
  };
}
