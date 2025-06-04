// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferContacts extends APIResource {
  /**
   * Use this resource to create a new contact. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-utworzyc-nowy-kontakt" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-create-new-contact" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const contactResponse =
   *   await client.sale.offerContacts.create();
   * ```
   */
  create(body: OfferContactCreateParams, options?: RequestOptions): APIPromise<ContactResponse> {
    return this._client.post('/sale/offer-contacts', {
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
   * Use this resource to get contact details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-szczegoly-danego-kontaktu" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-contact-details" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const contactResponse =
   *   await client.sale.offerContacts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ContactResponse> {
    return this._client.get(path`/sale/offer-contacts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify contact details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-zmienic-dane-kontaktu" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-change-contact-data" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const contactResponse =
   *   await client.sale.offerContacts.update('id');
   * ```
   */
  update(id: string, body: OfferContactUpdateParams, options?: RequestOptions): APIPromise<ContactResponse> {
    return this._client.put(path`/sale/offer-contacts/${id}`, {
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
   * Use this resource to get details of many contacts. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-liste-kontaktow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-a-list-of-contacts" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerContacts =
   *   await client.sale.offerContacts.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<OfferContactListResponse> {
    return this._client.get('/sale/offer-contacts', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface ContactRequest {
  emails?: Array<ContactRequest.Email>;

  name?: string;

  phones?: Array<ContactRequest.Phone>;
}

export namespace ContactRequest {
  export interface Email {
    /**
     * The contact's email address. The user part (before `@`) cannot be longer than 64
     * characters.
     */
    address?: string;
  }

  export interface Phone {
    /**
     * A valid phone number
     */
    number?: string;
  }
}

export interface ContactResponse {
  id?: string;

  emails?: Array<ContactResponse.Email>;

  name?: string;

  phones?: Array<ContactResponse.Phone>;
}

export namespace ContactResponse {
  export interface Email {
    address?: string;
  }

  export interface Phone {
    number?: string;
  }
}

export interface OfferContactListResponse {
  contacts?: Array<ContactResponse>;
}

export interface OfferContactCreateParams {
  emails?: Array<OfferContactCreateParams.Email>;

  name?: string;

  phones?: Array<OfferContactCreateParams.Phone>;
}

export namespace OfferContactCreateParams {
  export interface Email {
    /**
     * The contact's email address. The user part (before `@`) cannot be longer than 64
     * characters.
     */
    address?: string;
  }

  export interface Phone {
    /**
     * A valid phone number
     */
    number?: string;
  }
}

export interface OfferContactUpdateParams {
  emails?: Array<OfferContactUpdateParams.Email>;

  name?: string;

  phones?: Array<OfferContactUpdateParams.Phone>;
}

export namespace OfferContactUpdateParams {
  export interface Email {
    /**
     * The contact's email address. The user part (before `@`) cannot be longer than 64
     * characters.
     */
    address?: string;
  }

  export interface Phone {
    /**
     * A valid phone number
     */
    number?: string;
  }
}

export declare namespace OfferContacts {
  export {
    type ContactRequest as ContactRequest,
    type ContactResponse as ContactResponse,
    type OfferContactListResponse as OfferContactListResponse,
    type OfferContactCreateParams as OfferContactCreateParams,
    type OfferContactUpdateParams as OfferContactUpdateParams,
  };
}
