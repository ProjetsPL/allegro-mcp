// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResponsiblePersonsAPI from './responsible-persons';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ResponsiblePersons extends APIResource {
  /**
   * Use this resource to create a new responsible person for the compliance of the
   * product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#osoba-odpowiedzialna-za-zgodnosc-produktu-z-przepisami-unijnymi" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-persons-for-the-compliance-of-the-product-with-eu-regulations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsiblePersonResponse =
   *   await client.sale.responsiblePersons.create({
   *     Accept: 'application/vnd.allegro.public.v1+json',
   *   });
   * ```
   */
  create(
    params: ResponsiblePersonCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponsiblePersonResponse> {
    const { Accept, ...body } = params;
    return this._client.post('/sale/responsible-persons', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: Accept },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to update the responsible person for the compliance of the
   * product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#osoba-odpowiedzialna-za-zgodnosc-produktu-z-przepisami-unijnymi" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-persons-for-the-compliance-of-the-product-with-eu-regulations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsiblePersonResponse =
   *   await client.sale.responsiblePersons.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { Accept: 'application/vnd.allegro.public.v1+json' },
   *   );
   * ```
   */
  update(
    pathID: string,
    params: ResponsiblePersonUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResponsiblePersonResponse> {
    const { Accept, ...body } = params;
    return this._client.put(path`/sale/responsible-persons/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: Accept },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get a list of responsible persons for the compliance of the
   * product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#osoba-odpowiedzialna-za-zgodnosc-produktu-z-przepisami-unijnymi" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-persons-for-the-compliance-of-the-product-with-eu-regulations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsiblePersons =
   *   await client.sale.responsiblePersons.list({
   *     Accept: 'application/vnd.allegro.public.v1+json',
   *   });
   * ```
   */
  list(
    params: ResponsiblePersonListParams,
    options?: RequestOptions,
  ): APIPromise<ResponsiblePersonListResponse> {
    const { Accept, ...query } = params;
    return this._client.get('/sale/responsible-persons', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: Accept }, options?.headers]),
    });
  }
}

/**
 * Responsible person address.
 */
export interface ResponsiblePersonAddress {
  /**
   * City.
   */
  city?: string;

  /**
   * Code of responsible person country (ISO 3166).
   */
  countryCode?:
    | 'AT'
    | 'BE'
    | 'BG'
    | 'HR'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'EE'
    | 'FI'
    | 'FR'
    | 'GR'
    | 'ES'
    | 'IE'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'MT'
    | 'NL'
    | 'DE'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'SK'
    | 'SI'
    | 'SE'
    | 'HU'
    | 'IT';

  /**
   * Postal code.
   */
  postalCode?: string;

  /**
   * Street and number.
   */
  street?: string;
}

/**
 * Contact to responsible person. At least one of the following fields is required:
 * `email` or `formUrl`.
 */
export interface ResponsiblePersonContact {
  /**
   * Email of responsible person.
   */
  email?: string;

  /**
   * URL address to contact form.
   */
  formUrl?: string;

  /**
   * Phone number of responsible person. This field is optional.
   */
  phoneNumber?: string;
}

export interface ResponsiblePersonResponse {
  /**
   * Responsible person ID.
   */
  id?: string;

  /**
   * Internal name of responsible person in dictionary (visible only to you).
   */
  name?: string;

  /**
   * Responsible person personal data.
   */
  personalData?: ResponsiblePersonResponse.PersonalData;
}

export namespace ResponsiblePersonResponse {
  /**
   * Responsible person personal data.
   */
  export interface PersonalData {
    /**
     * Responsible person address.
     */
    address?: ResponsiblePersonsAPI.ResponsiblePersonAddress;

    /**
     * Contact to responsible person. At least one of the following fields is required:
     * `email` or `formUrl`.
     */
    contact?: ResponsiblePersonsAPI.ResponsiblePersonContact;

    /**
     * Name of responsible person.
     */
    name?: string;
  }
}

export interface ResponsiblePersonListResponse {
  /**
   * Number of responsible persons data returned in search result for the given
   * parameters.
   */
  count?: number;

  responsiblePersons?: Array<ResponsiblePersonResponse>;

  /**
   * Total number of available responsible persons data.
   */
  totalCount?: number;
}

export interface ResponsiblePersonCreateParams {
  /**
   * Header param: Acceptable representation of the response.
   */
  Accept: string;

  /**
   * Body param: Internal name of responsible person in dictionary (visible only to
   * you). Can't start or end with whitespace. Can't contain whitespaces other than
   * space. Can't contain multiple spaces in a row.
   */
  name?: string;

  /**
   * Body param: Responsible person personal data.
   */
  personalData?: ResponsiblePersonCreateParams.PersonalData;
}

export namespace ResponsiblePersonCreateParams {
  /**
   * Responsible person personal data.
   */
  export interface PersonalData {
    /**
     * Responsible person address.
     */
    address?: ResponsiblePersonsAPI.ResponsiblePersonAddress;

    /**
     * Contact to responsible person. At least one of the following fields is required:
     * `email` or `formUrl`.
     */
    contact?: ResponsiblePersonsAPI.ResponsiblePersonContact;

    /**
     * Name of responsible person. Can't start or end with whitespace. Can't contain
     * whitespaces other than space. Can't contain multiple spaces in a row.
     */
    name?: string;
  }
}

export interface ResponsiblePersonUpdateParams {
  /**
   * Header param: Acceptable representation of the response.
   */
  Accept: string;

  /**
   * Body param: Responsible person ID.
   */
  body_id?: string;

  /**
   * Body param: Internal name of responsible person in dictionary (visible only to
   * you). Can't start or end with whitespace. Can't contain whitespaces other than
   * space. Can't contain multiple spaces in a row.
   */
  name?: string;

  /**
   * Body param: Responsible person personal data.
   */
  personalData?: ResponsiblePersonUpdateParams.PersonalData;
}

export namespace ResponsiblePersonUpdateParams {
  /**
   * Responsible person personal data.
   */
  export interface PersonalData {
    /**
     * Responsible person address.
     */
    address?: ResponsiblePersonsAPI.ResponsiblePersonAddress;

    /**
     * Contact to responsible person. At least one of the following fields is required:
     * `email` or `formUrl`.
     */
    contact?: ResponsiblePersonsAPI.ResponsiblePersonContact;

    /**
     * Name of responsible person.
     */
    name?: string;
  }
}

export interface ResponsiblePersonListParams {
  /**
   * Header param: Acceptable representation of the response.
   */
  Accept: string;

  /**
   * Query param: Number of returned responsible persons data.
   */
  limit?: number;

  /**
   * Query param: Index of first returned responsible persons data from all search
   * results.
   */
  offset?: number;
}

export declare namespace ResponsiblePersons {
  export {
    type ResponsiblePersonAddress as ResponsiblePersonAddress,
    type ResponsiblePersonContact as ResponsiblePersonContact,
    type ResponsiblePersonResponse as ResponsiblePersonResponse,
    type ResponsiblePersonListResponse as ResponsiblePersonListResponse,
    type ResponsiblePersonCreateParams as ResponsiblePersonCreateParams,
    type ResponsiblePersonUpdateParams as ResponsiblePersonUpdateParams,
    type ResponsiblePersonListParams as ResponsiblePersonListParams,
  };
}
