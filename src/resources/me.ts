// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  /**
   * Use this resource when you need basic information about authenticated user. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#informacje-o-uzytkowniku" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#information-about-user" target="_blank">EN</a>.
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/me', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface MeRetrieveResponse {
  /**
   * User Id.
   */
  id?: string;

  baseMarketplace?: MeRetrieveResponse.BaseMarketplace;

  company?: MeRetrieveResponse.Company;

  /**
   * User's email.
   */
  email?: string;

  /**
   * User's features list:
   *
   * - `SUPER_SELLER` - Super Seller ("Super Sprzedawca") information.
   * - `ONE_FULFILLMENT` - Seller uses the fulfillment service provided by Allegro.
   */
  features?: Array<string>;

  /**
   * User's first name.
   */
  firstName?: string;

  /**
   * User's last name.
   */
  lastName?: string;

  /**
   * User login.
   */
  login?: string;
}

export namespace MeRetrieveResponse {
  export interface BaseMarketplace {
    /**
     * Base marketplace identifier
     */
    id?: string;
  }

  export interface Company {
    /**
     * User's company name.
     */
    name?: string;

    /**
     * User's tax identification number.
     */
    taxId?: string;
  }
}

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };
}
