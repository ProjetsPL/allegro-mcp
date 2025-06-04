// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AdditionalEmails extends APIResource {
  /**
   * Use this resource to add a new additional email address to account. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-dodac-adres-e-mail" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-add-an-additional-email" target="_blank">EN</a>.
   */
  create(body: AdditionalEmailCreateParams, options?: RequestOptions): APIPromise<AdditionalEmail> {
    return this._client.post('/account/additional-emails', {
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
   * Use this resource to retrieve a single additional email. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-szczegolowe-informacje-o-adresie-e-mail" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-e-mail-details" target="_blank">EN</a>.
   */
  retrieve(emailID: string, options?: RequestOptions): APIPromise<AdditionalEmail> {
    return this._client.get(path`/account/additional-emails/${emailID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a list of all additional email addresses assigned to
   * account. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-adresy-e-mail" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-email-addresses" target="_blank">EN</a>.
   */
  list(options?: RequestOptions): APIPromise<AdditionalEmailListResponse> {
    return this._client.get('/account/additional-emails', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete one of additional emails. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-usunac-adres-e-mail" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-remove-e-mail" target="_blank">EN</a>.
   */
  delete(emailID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/account/additional-emails/${emailID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Details of a single additional email address.
 */
export interface AdditionalEmail {
  id: string;

  createdAt: string;

  email: string;
}

export interface AdditionalEmailListResponse {
  'additional-emails': Array<AdditionalEmail>;
}

export interface AdditionalEmailCreateParams {
  /**
   * A valid email address you want to add to your account. Maximum length of the
   * part before the `@` sign is 64 characters.
   */
  email: string;
}

export declare namespace AdditionalEmails {
  export {
    type AdditionalEmail as AdditionalEmail,
    type AdditionalEmailListResponse as AdditionalEmailListResponse,
    type AdditionalEmailCreateParams as AdditionalEmailCreateParams,
  };
}
